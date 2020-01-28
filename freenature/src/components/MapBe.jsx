import React, {Component} from 'react';
import L from 'leaflet';
import {GeoJSON, Map, Popup, TileLayer} from 'react-leaflet';
import bivakzoneData from '../bivakzoneData.json';
import img from '../img/my-icon.png'

var myIcon= new L.Icon({
  iconUrl: img,
  iconSize: [15,15],
  iconAnchor: [32,64],
  popupAnchor: [-3, -76],
})

class MapBe extends Component {
    state = {
        lat: 50.502,
        lng: 4.34878,
        zoom: 7
      }
      
    render() {
        const position = [this.state.lat, this.state.lng]
    return (
      <Map className= 'map' center={position} zoom={this.state.zoom}>
        <TileLayer
          url="https://api.maptiler.com/maps/streets/{z}/{x}/{y}.png?key=CrxeqLRPyjGPIdZII2Ej"
          attribution="&copy; <a href=&quot;https://www.maptiler.com/copyright/&quot;>OpenStreetMap</a>"
        />
        {
            bivakzoneData.features
                .map((bivakzone) => {
                    if(bivakzone.geometry.type === "Point"){
                        return bivakzone;
                    }
                    bivakzone.geometry.type = "Point";
                    bivakzone.geometry.coordinates = 
                            bivakzone.geometry.coordinates[0][0];
                    return bivakzone;
                })
            
            .map((singleBivakZone)=> 
               <GeoJSON 
                    data={singleBivakZone}
                    style={() => ({
                      color: '#4a83ec',
                      weight: 0.5,
                      fillColor: "#1a1d62",
                      fillOpacity: 1,
                    })}
                    >
                    <Popup>
                      A pretty CSS3 popup. <br /> Easily customizable.
                    </Popup>
          </GeoJSON> 
        ) }
      </Map>
    )
  }
}

export default MapBe;
