import React from 'react';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'
import L from 'leaflet';
import Basemap from './Basemap'


var myIcon = L.icon({
    iconUrl: 'https://unpkg.com/leaflet@1.5.0/dist/images/marker-icon.png',
    iconSize: [38, 95],
    iconAnchor: [22, 94],
    popupAnchor: [-3, -76],
});




export default class Modal extends React.Component {
    state = {

        lat: 50.77815527465925,
        lng: 4.4549560546875,
        zoom: 9,
        basemap: 'osm'
    };

    onBMChange = (bm) => {
        this.setState({
            basemap: bm
        });
    }


    render() {
        const center = [this.state.lat, this.state.lng];
        const basemapsDict = {
            osm: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
            hot: 'https://{s}.tile.openstreetmap.de/tiles/osmde/{z}/{x}/{y}.png',
            dark: 'https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}@2x.png'
        }

        return (
            <div>
                <Map center={center} zoom={this.state.zoom} >
                    <TileLayer
                        attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                        url={basemapsDict[this.state.basemap]}
                    />
                    <Basemap basemap={this.state.basemap} onChange={this.onBMChange} />
                    <Marker position={center} icon={myIcon}>
                        <Popup>
                            A pretty CSS3 popup. tajjjj <br /> Easily customizable.
          </Popup>
                    </Marker>
                </Map>

            </div >
        )
    }
}
