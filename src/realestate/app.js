import React, { Component} from 'react'
import ReactDOM from 'react-dom'
import Header from './components/header'
import Filter from './components/filter'
import Listings from './components/listings'
import listingsData from './data/listingdata'

export default class App extends Component {
  constructor () {
    super()
    this.state = {
      name: 'Martez',
      listingsData,
      city: 'All',
      houseType: 'All',
      bedroom: '1',
      min_price: 0,
      max_price: 1000000,
      min_floor_space: 0,
      max_floor_space: 5000,
      elevator: false,
      swimming_pool: false,
      gym: false,
      filterData: listingsData,
      updateFormsData: '',
      sortby: 'price-dsc',
      view: 'long',
      search: ''
    }
    this.change = this.change.bind(this)
    this.filterData = this.filterData.bind(this)
    this.updateForms = this.updateForms.bind(this)
    this.changeView = this.changeView.bind(this)
  }

  componentWillMount() {
    var listingsData = this.state.listingsData.sort((a, b) => {
      return a.price - b.price
    })

    this.setState({
      listingsData
    })
  }

  change(e) {
    let name = e.target.name
    let value = (e.target.type === "checkbox") ? e.target.checked : e.target.value

    this.setState({
      [name]: value
    }, () => {
      this.filterData()
    })
  }

  changeView(viewName) {
    this.setState({
      view: viewName
    })
  }

  filterData() {
    var newData = this.state.listingsData.filter((item) => {
      return item.price >= this.state.min_price && item.price <= this.state.max_price && item.floorSpace >= this.state.min_floor_space && item.floorSpace <= this.state.max_floor_space && item.rooms >= this.state.bedroom
    })

    if(this.state.city != "All") {
      newData = newData.filter((item) => {
        return item.city == this.state.city
      })
    }

    if(this.state.houseType != "All") {
      newData = newData.filter((item) => {
        return item.houseType == this.state.houseType
      })
    }

    if(this.state.sortby == 'price-dsc') {
      newData = newData.sort((a,b) => {
        return a.price - b.price
      })
    }

    if(this.state.sortby == 'price-asc') {
      newData = newData.sort((a,b) => {
        return b.price - a.price
      })
    }

    if (this.state.search != '') {
      newData = newData.filter((item) => {
        var city = item.city.toLowerCase()
        var searchText = this.state.search.toLowerCase()
        var n = city.match(searchText)

        if (n != null) {
          return true
        }
      })
    }

    this.setState({
      filterData: newData
    })
  }

  updateForms() {
    // city
    var cities = this.state.listingsData.map((item) => {
      return item.city
    })
    cities = new Set(cities)
    cities = [...cities]

    cities = cities.sort()

    //houseType
    var houseTypes = this.state.listingsData.map((item) => {
      return item.houseType
    })
    houseTypes = new Set(houseTypes)
    houseTypes = [...houseTypes]

    houseTypes = houseTypes.sort()

    // bedroom
    var bedrooms = this.state.listingsData.map((item) => {
      return item.rooms
    })
    bedrooms = new Set(bedrooms)
    bedrooms = [...bedrooms]

    bedrooms = bedrooms.sort()

    this.setState({
      updateFormsData: {
        houseTypes,
        bedrooms,
        cities
      }
    }, () => {
      console.log(this.state)
    })
  }

  render () {
    return (
      <div>
        <Header />
        <section id="content-area">
          <Filter
            change={this.change}
            globalState={this.state}
            updateAction={this.updateForms} />
          <Listings
            listingsData={this.state.filterData}
            change={this.change}
            globalState={this.state}
            changeView={this.changeView}/>

          <section id="pagination">
            <ul className="pages">
              <li>Prev</li>
              <li className="active">1</li>
              <li>2</li>
              <li>3</li>
              <li>4</li>
              <li>5</li>
              <li>Next</li>
            </ul>
          </section>

        </section>
      </div>
    );
  }
}
