import React, { Component } from 'react';
import ReactMapboxGl, { Layer, Feature, ZoomControl } from "react-mapbox-gl";
import config from "../config.json";
import styles from './Melbourne.style';

const { accessToken, mapStyle } = config;
const melbourneCenter = [144.963058, -37.813628];

class Melbourne extends Component {

  constructor(props) {
    super(props);
    this.state = {
      zoom: [11],
    };
  }

  _onControlClick = (map, zoomDiff) => {
    const zoom = map.getZoom() + zoomDiff;
    this.setState({ zoom: [zoom] });
  };

  render() {
    return (
        <div>
          <ReactMapboxGl
            style={mapStyle}
            accessToken={accessToken}
            center={melbourneCenter}
            zoom={this.state.zoom}
            containerStyle={styles.container}>

              <ZoomControl
                zoomDiff={1}
                onControlClick={this._onControlClick}/>

              <Layer
                type="symbol"
                id="marker"
                layout={{ "icon-image": "marker-15" }}>
                <Feature coordinates={melbourneCenter}/>
              </Layer>

          </ReactMapboxGl>
        </div>
    );
  }
}

export default Melbourne;
