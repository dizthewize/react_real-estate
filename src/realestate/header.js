import React, { Component} from 'react'

export default class Header extends Component {
  constructor () {
    super()
    this.state = {
      name: 'Martez'
    }
  }
  render () {
    return (
      <header>
        <div className="logo">Lux Estates</div>

        {/* <nav>
          <a href="#">Create</a>
          <a href="#">About Us</a>
          <a href="#">Login</a>
          <a href="#" className="register-btn">Register</a>
        </nav> */}
      </header>
    )
  }
}
