import React from 'react';
import { GeoJSON, Map as LeafletMap, Popup, TileLayer } from 'react-leaflet';
import Modal from './Modal';
import bivakzones from './bivakzones.json';


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
                                console.log(bivakzone)
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
                                    })}>
                                    <Popup>
                                        <Modal bivakzone={bivakzone} />
                                        <a href="/page1">{bivakzone.properties.name}</a>
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

