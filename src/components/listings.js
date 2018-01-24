import React, { Component} from 'react'

export default class Listings extends Component {
  constructor () {
    super()
    this.state = {
      name: 'Martez'
    }

    this.listing = this.listing.bind(this)
  }

  listing() {
    var {listingsData} = this.props;

    if(listingsData === undefined || listingsData.length === 0) {
      return "Sorry your search did not match any listings"
    }

    return listingsData.map((listing, index) => {
      if(this.props.globalState.view === 'box') {
        return (
          <div key={index} className="col-md-4">
            <div className="listing">

              <div className="listing-img" style={{background: `url("${listing.img}") no-repeat center center`}}>
                <span className="address">{listing.address}</span>

                <div className="details">

                    <div className="listing-details">

                      <div className="floor-space"><i className="fa fa-square-o" aria-hidden="true"></i><span>{listing.floorSpace} ft&sup2;</span></div>

                      <div className="bedrooms">
                        <i className="fa fa-bed" aria-hidden="true"></i>
                        <span>{listing.rooms}</span>
                      </div>
                    </div>


                </div>
              </div>

              <div className="bottom-info">
                <span className="price">{listing.price}</span>
                <span className="location"> <i className="ion ion-ios-location"></i> {listing.city}, {listing.state}</span>
              </div>

            </div>
          </div>
        )
      } else {
        return (
          <div className="col-md-12 col-lg-6" key={index}>
            <div className="listing">

              <div className="listing-img" style={{background: `url("${listing.img}") no-repeat center center`}}>
                <span className="address">{listing.address}</span>

                <div className="details">

                    <div className="listing-details">

                      <div className="floor-space"><i className="fa fa-square-o" aria-hidden="true"></i><span>{listing.floorSpace} ft&sup2;</span></div>

                      <div className="bedrooms">
                        <i className="fa fa-bed" aria-hidden="true"></i>
                        <span>{listing.rooms}</span>
                      </div>
                    </div>


                </div>
              </div>

              <div className="bottom-info">
                <span className="price">{listing.price}</span>
                <span className="location"> <i className="ion ion-ios-location"></i> {listing.city}, {listing.state}</span>
              </div>

            </div>
          </div>
        )
      }
    })
  }
  render () {
    return (
      <section id="listings">

        <section className="search-area">
          <input type="text" name="search" placeholder="Search By City" onChange={this.props.change}/>
        </section>

        <section className="sort-by-area">

          <div className="results">
            {this.props.globalState.filterData.length} results found
          </div>

          <div className="sort-options">
            <select name="sortby" className="sortby" onChange={this.props.change}>
              <option value="price-dsc">Lowest Price</option>
              <option value="price-asc">Highest Price</option>
            </select>

            <div className="view">
              <i className="fa fa-list" onClick={this.props.changeView.bind(null, "long")}></i>
              <i className="fa fa-th" onClick={this.props.changeView.bind(null, "box")}></i>
            </div>

          </div>
        </section>

        <section className="listing-results">

          {this.listing()}

        </section>

      </section>
    )
  }
}
