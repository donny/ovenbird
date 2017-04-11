import React, { Component } from 'react';
import ReactMapboxGl, { GeoJSONLayer, Layer, Feature, ZoomControl } from 'react-mapbox-gl';
import config from '../config.json';
import styles from './Melbourne.style';
import Checkbox from './Checkbox';
import './App.css';

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

  onCheckboxChanged(value) {
    console.log(value);
  }

  render() {
    return (
        <div>
          <nav className="nav-overlay">
            <div className="nav-overlay-content">

              <Checkbox name="test1" label="Test1" callback={this.onCheckboxChanged}/>

            </div>
          </nav>

          <ReactMapboxGl
            style={mapStyle}
            accessToken={accessToken}
            center={melbourneCenter}
            zoom={this.state.zoom}
            containerStyle={styles.container}>

              <ZoomControl
                zoomDiff={1}
                position="bottomRight"
                onControlClick={this._onControlClick}
              />

              <GeoJSONLayer
                data="http://data.gov.au/geoserver/vic-suburb-locality-boundaries-psma-administrative-boundaries/wfs?request=GetFeature&typeName=af33dd8c_0534_4e18_9245_fc64440f742e&outputFormat=json"
                // data="http://fiftytwo-ovenbird.netlify.com/victoria_suburbs.json"
                lineLayout={{ visibility: "visible" }}
              />

          </ReactMapboxGl>
        </div>
    );
  }
}

export default Melbourne;
