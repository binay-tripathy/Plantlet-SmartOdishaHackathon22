import React, { Component } from 'react'

export default class map extends Component {
  render() {
    var map = L.map('map').setView([51.505, -0.09], 13);
    return (
      <div>
        <div id="map" style={{height: "180px"}}>
            
        </div>
      </div>
    )
  }
}
