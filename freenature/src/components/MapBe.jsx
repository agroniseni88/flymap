import React from 'react';
import { GeoJSON, Map as LeafletMap, Popup, TileLayer } from 'react-leaflet';
import L from 'leaflet';
import icon from '../image/tentIcon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
import Modal from './Modal';
import bivakzones from './bivakzones.json';
import filter from '../logic/filter'


let tentIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow,
    iconSize: [24, 30],
    iconAnchor: [12, 30]
});

L.Marker.prototype.options.icon = tentIcon;

class MapBe extends React.Component {
    state = {
        lat: 50.502,
        lng: 4.34878,
    };

    render() {
        const position = [this.state.lat, this.state.lng]
        return (
            <div>

                <LeafletMap
                    center={position}
                    zoom={8}
                    maxZoom={19}
                    attributionControl={true}
                    zoomControl={true}
                    doubleClickZoom={true}
                    scrollWheelZoom={true}
                    dragging={true}
                    animate={true}
                    easeLinearity={0.35}
                >

                    <TileLayer url="https://api.maptiler.com/maps/streets/{z}/{x}/{y}.png?key=CrxeqLRPyjGPIdZII2Ej"
                        attribution="&copy; <a href=&quot;https://www.maptiler.com/copyright/&quot;>OpenStreetMap</a>"
                    />
                    {
                        bivakzones.features
                            .map((bivakzone) => {
                                if (bivakzone.geometry.type === 'Point') {
                                    return (bivakzone)

                                } else {
                                    bivakzone.geometry.coordinates =
                                        bivakzone.geometry.coordinates[0][0]
                                    bivakzone.geometry.type = 'Point'
                                    return (bivakzone)
                                }
                            })

                            .map((bivakzone) => (

                                <GeoJSON
                                    key={bivakzone.id}
                                    data={bivakzone}
                                    style={() => ({
                                        color: '#4a83ec',
                                        weight: 0.5,
                                        fillColor: "#1a1d62",
                                        fillOpacity: 1,
                                    })}
                                    icon={tentIcon}>
                                    <Popup>
                                        <Modal bivakzone={bivakzone} />
                                        <a href="http://www.bivakzone.be/">{bivakzone.properties.name}</a>
                                    </Popup>
                                </GeoJSON>

                            ))
                    }
                </LeafletMap>
            </div >
        );
    }
}

export default MapBe;

