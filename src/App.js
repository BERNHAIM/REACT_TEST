import React from 'react';
import CounterContainer from './containers/CounterContainer';
import Info from './components/Info';
import Member from './components/Member';
import SimpleMap from './components/SimpleMap';

class App extends React.Component {
  constructor() {
    super();

    this.onDrawing = this.onDrawing.bind(this)
  }

  onDrawing() {
    const map = window.google.maps.Map(document.querySelector("#map"));

    const google = window.google
    var drawingManager = new google.maps.drawing.DrawingManager({
      drawingMode: google.maps.drawing.OverlayType.MARKER,
      drawingControl: true,
      drawingControlOptions: {
        position: google.maps.ControlPosition.TOP_CENTER,
        drawingModes: ['marker', 'circle', 'polygon', 'polyline', 'rectangle']
      },
      markerOptions: {icon: 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png'},
      circleOptions: {
        fillColor: '#ffff00',
        fillOpacity: 1,
        strokeWeight: 5,
        clickable: false,
        editable: true,
        zIndex: 1
      }
    });
    console.log(drawingManager)
    //drawingManager.setMap(map);
  }

  render() {
    return (
      <div>
        {/* <button onClick={this.onDrawing}>TEST</button>
        <SimpleMap /> */}
        <Member/>
      </div>
    )
  }
};

export default App;