import React from 'react';
import { Map as LeafletMap, GeoJSON, TileLayer, Popup } from 'react-leaflet';
import PopUp from './PopUp';
import Bicycles from './bicycle.json';




class Bicycle extends React.Component {
    render() {
        return (
            <LeafletMap
                center={[51, 5]}
                zoom={9}
                maxZoom={19}
                attributionControl={true}
                zoomControl={true}
                doubleClickZoom={true}
                scrollWheelZoom={true}
                dragging={true}
                animate={true}
                easeLinearity={0.35}
            >
                <TileLayer url='http://{s}.tile.osm.org/{z}/{x}/{y}.png' />
                {
                    Bicycles.features.map((bike) => (
                        <GeoJSON
                            data={bike}
                            style={() => ({
                                color: '#4a83ec',
                                weight: 0.5,
                                fillColor: "#1a1d62",
                                fillOpacity: 1,
                            })}>
                            <Popup>
                                <PopUp bivakzone={bike} />
                                <a href="/page1">{bike.properties.name}</a>
                            </Popup>
                        </GeoJSON>
                    ))
                }
            </LeafletMap>
        );
    }
}

export default Bicycle;

