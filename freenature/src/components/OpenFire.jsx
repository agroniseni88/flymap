import React from 'react';
import { Map as LeafletMap, GeoJSON, TileLayer, Popup } from 'react-leaflet';
import Modal from './Modal';
import bivakzones from './bivakzones.json';


class Marker extends React.Component {
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
                            .filter((bivak) => bivak.properties.openfire === 'yes')
                            .map((bivak) => {
                                if (bivak.geometry.type === 'Point') {
                                    return (bivak)

                                } else {
                                    bivak.geometry.coordinates =
                                        bivak.geometry.coordinates[0][0]
                                    bivak.geometry.type = 'Point'
                                    return (bivak)
                                }
                            })
                            .map((bivak) => (
                                <GeoJSON
                                    key={bivak.id}
                                    data={bivak}
                                    style={() => ({
                                        color: '#4a83ec',
                                        weight: 0.5,
                                        fillColor: "#1a1d62",
                                        fillOpacity: 1,
                                    })}>
                                    <Popup>
                                        <Modal bivakzone={bivak} />
                                    </Popup>
                                </GeoJSON>
                            ))
                    }
                </LeafletMap>
            </div>
        )
    }
}

export default Marker;