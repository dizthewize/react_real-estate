import React, { Component} from 'react'

export default class Filter extends Component {
  constructor () {
    super()
    this.state = {
      name: 'Martez'
    }
    this.cities = this.cities.bind(this)
    this.houseTypes = this.houseTypes.bind(this)
    this.bedrooms = this.bedrooms.bind(this)
  }

  componentWillMount() {
    this.props.updateAction()
  }

  cities() {
    if(this.props.globalState.updateFormsData.cities !== undefined) {
      var { cities } = this.props.globalState.updateFormsData

      return cities.map((item) => {
        return (
          <option key={item} value={item}>{item}</option>
        )
      })
    }
  }

  houseTypes() {
    if(this.props.globalState.updateFormsData.houseTypes !== undefined) {
      var { houseTypes } = this.props.globalState.updateFormsData

      return houseTypes.map((item) => {
        return (
          <option key={item} value={item}>{item}</option>
        )
      })
    }
  }

  bedrooms() {
    if(this.props.globalState.updateFormsData.bedrooms !== undefined) {
      var { bedrooms } = this.props.globalState.updateFormsData

      return bedrooms.map((item) => {
        return (
          <option key={item} value={item}>{item}+ BR</option>
        )
      })
    }
  }

  render () {
    return (
      <section id="filter">
        <div className="inside">
          <h4>Filter</h4>

          <label htmlFor="city">City</label>
          <select name="city" className="filters city" onChange={this.props.change}>
            <option value="All">All</option>
            {this.cities()}
          </select>

          <label htmlFor="houseType">Home Type</label>
          <select name="houseType" className="filters housetype" onChange={this.props.change}>
            <option value="All">All</option>
            {this.houseTypes()}
          </select>

          <label htmlFor="bedroom">Bedroom</label>
          <select name="bedroom" className=" filters bedrooms" onChange={this.props.change}>
            {this.bedrooms()}
          </select>

          <div className="filters price">
            <span className="title">Price</span>
            <input type="text" name="min_price" className="min-price" onChange={this.props.change} value={this.props.globalState.min_price} />
            <input type="text" name="max_price" className="max-price" onChange={this.props.change} value={this.props.globalState.max_price} />
          </div>

          <div className="filters floor-space">
            <span className="title">Floor Space</span>
            <input type="text" name="min_floor_space" className="min-floor-space" onChange={this.props.change} value={this.props.globalState.min_floor_space} />
            <input type="text" name="max_floor_space" className="max-floor-space" onChange={this.props.change} value={this.props.globalState.max_floor_space} />
          </div>

          <div className="filters extras">
            <span className="title">
              Extras
            </span>
            <label htmlFor="extras">
              <span>Elevators</span>
              <input name="elevator" value="elevator" type="checkbox" onChange={this.props.change}/>
            </label>
            <label htmlFor="extras">
              <span>Swimming pool</span>
              <input name="swimming_pool" value="swimming_pool" type="checkbox" onChange={this.props.change} />
            </label>
            <label htmlFor="extras">
              <span>Gym</span>
              <input name="gym" value="gym" type="checkbox" onChange={this.props.change} />
            </label>
          </div>
        </div>
      </section>
    )
  }
}
