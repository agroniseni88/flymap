import React from 'react';
import { Map as LeafletMap, GeoJSON, TileLayer, Popup } from 'react-leaflet';
import Modal from './Modal';
import bivakzones from './bivakzones.json';


export default function Marker() {
    return (
        <div>

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
                 <TileLayer url="https://api.maptiler.com/maps/streets/{z}/{x}/{y}.png?key=CrxeqLRPyjGPIdZII2Ej"
                        attribution="&copy; <a href=&quot;https://www.maptiler.com/copyright/&quot;>OpenStreetMap</a>"
                    />
                {
                    bivakzones.features
                        .filter((bivak) => bivak.properties.openfire === 'yes')
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
