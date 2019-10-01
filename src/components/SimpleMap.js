import React, { Component } from 'react';


class SimpleMap extends Component {
    componentDidMount() {
        const map = new window.google.maps.Map(document.getElementById('map'), {
          center: { lat: 41.0082, lng: 28.9784 },
          zoom: 8
        });
      }
    
      render() {
        return (
          <div style={{ width: "100%", height: 500 }} id="map" />
        );
      }
}

export default SimpleMap