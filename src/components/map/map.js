import React, { Component } from 'react'

export default class map extends Component {
    render() {
        var map = L.map('map').setView([20.2777085, 85.777694], 13);
        L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
            attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        }).addTo(map);
        return (
            <div>
                <div id="map" style={{ height: "180px" }}>

                </div>
            </div>
        )
    }
}
