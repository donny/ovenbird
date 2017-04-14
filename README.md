# ovenbird

Ovenbird is a small React app that shows the map of Melbourne and its suburb boundaries.

### Background

This project is part of [52projects](https://donny.github.io/52projects/) and the new stuff that I learn through this project: [Mapbox](https://www.mapbox.com) and [react-mapbox-gl](https://github.com/alex3165/react-mapbox-gl).

### Project

Ovenbird utilises the [Mapbox](https://www.mapbox.com) location platform to display the map of Melbourne, Australia and its suburb boundaries. The [Victoria suburb/locality boundaries](https://data.gov.au/dataset/vic-suburb-locality-boundaries-psma-administrative-boundaries) is sourced from [data.gov.au](https://data.gov.au/) that provides access to public datasets from the Australian government. The screenshot of the app:

![Screenshot](https://raw.githubusercontent.com/donny/ovenbird/master/screenshot.png)

### Implementation

Mapbox provides [Mapbox GL JS](https://www.mapbox.com/mapbox-gl-js/api/), a JavaScript library that uses WebGL to render interactive maps from vector tiles. It is very fast after the initial load and it has been [favourably compared](http://fuzzytolerance.info/blog/2016/03/16/Leaflet-to-Mapbox-GL/) with [Leaflet](http://leafletjs.com). Ovenbird uses [react-mapbox-gl](https://github.com/alex3165/react-mapbox-gl) that provides React binding and wrapper of Mapbox GL JS.

The main code is in [`Melbourne.js`](https://github.com/donny/ovenbird/blob/master/src/Melbourne.js):

```javascript
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
```

The [`SuburbBoundaries`](https://github.com/donny/ovenbird/blob/master/src/SuburbBoundaries.js) component provides the `GeoJSONLayer` of the suburb boundaries:

```javascript
<GeoJSONLayer
  data="http://data.gov.au/geoserver/vic-suburb-locality-boundaries-psma-administrative-boundaries/wfs?request=GetFeature&typeName=af33dd8c_0534_4e18_9245_fc64440f742e&outputFormat=json"
  lineLayout={{ visibility: this.props.visibility }}
/>
```

Ovenbird is started using [Create React App](https://github.com/facebookincubator/create-react-app) and deployed on [Netlify](https://www.netlify.com).

### Conclusion

Initially, I was considering to play with [Leaflet](http://leafletjs.com), it's a well-known JavaScript library for maps and it was the foundation of the previous [Mapbox API](https://www.mapbox.com/mapbox.js/api/v3.0.1/). But, I've been spoilt by the vector tiles of [Mapbox GL JS]. It's been fun to play with a maps library and I think the next challenge is to parse and process many interesting datasets of Australia to be layered on top of Ovenbird.
