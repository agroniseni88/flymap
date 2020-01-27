import React, { Component } from 'react';
import L from 'leaflet';
import { Map, TileLayer, Marker, Popup, GeoJSON } from 'react-leaflet';
import bivakzoneData from '../bivakzoneData.json';


class MapBe extends Component {
    state = {
        lat: 50.5011,
        lng: 4.34878,
        zoom: 7,
      }
    render() {
        const position = [this.state.lat, this.state.lng]
    return (
      <Map className= 'map' center={position} zoom={this.state.zoom}>
        <TileLayer
          url="https://api.maptiler.com/maps/streets/{z}/{x}/{y}.png?key=CrxeqLRPyjGPIdZII2Ej"
          attribution="&copy; <a href=&quot;https://www.maptiler.com/copyright/&quot;>OpenStreetMap</a>contributors"
        />
       
        {bivakzoneData.features.map((bivakzoneData) =>
          <GeoJSON data={bivakzoneData}
          style={() => ({
            color: '#4a83ec',
            weight: 0.5,
            fillColor: "#1a1d62",
            fillOpacity: 1,
          })}>
          <Marker position={position}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
          </Marker>
          </GeoJSON> 
       )}
      </Map>
    )
  }
}

export default MapBe;