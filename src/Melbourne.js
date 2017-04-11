import React, { Component } from 'react';
import ReactMapboxGl, { GeoJSONLayer, Layer, Feature, ZoomControl } from 'react-mapbox-gl';
import config from '../config.json';
import styles from './Melbourne.style';
import Checkbox from './Checkbox';
import SuburbBoundaries from './SuburbBoundaries';
import './App.css';

const { accessToken, mapStyle } = config;
const melbourneCenter = [144.963058, -37.813628];

class Melbourne extends Component {

  constructor(props) {
    super(props);
    this.state = {
      zoom: [11],
      showSuburbBoundaries: false,
    };
    this.onCheckboxChanged = this.onCheckboxChanged.bind(this);
  }

  _onControlClick = (map, zoomDiff) => {
    const zoom = map.getZoom() + zoomDiff;
    this.setState({ zoom: [zoom] });
  };

  onCheckboxChanged(value) {
    this.setState({ showSuburbBoundaries : value })
  }

  render() {
    const showSuburbBoundaries = this.state.showSuburbBoundaries ? 'visible' : 'none';

    return (
        <div>
          <nav className="nav-overlay">
            <div className="nav-overlay-content">

              <Checkbox name="showSuburbBoundaries" label="Suburb Boundaries" callback={this.onCheckboxChanged}/>

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

              <SuburbBoundaries visibility={showSuburbBoundaries}/>

          </ReactMapboxGl>
        </div>
    );
  }
}

export default Melbourne;
