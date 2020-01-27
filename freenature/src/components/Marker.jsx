import React from 'react';
import { Map as LeafletMap, GeoJSON, TileLayer, Popup } from 'react-leaflet';
import PopUp from './PopUp';
import nofires from './nofires.json';

export default function Marker() {
    return (
        <div>
            <h1>Nofire on area</h1>
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
                <TileLayer url='https://tiles.wmflabs.org/hikebike/{z}/{x}/{y}.png' attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' />
                {
                    nofires.features.map((nofire) => (
                        <GeoJSON
                            data={nofire}
                            style={() => ({
                                color: '#4a83ec',
                                weight: 0.5,
                                fillColor: "#1a1d62",
                                fillOpacity: 1,
                            })}>
                            <Popup>
                                <PopUp nofire={nofire} />
                                <a href="/page1">{nofire.properties.name}</a>
                            </Popup>
                        </GeoJSON>
                    ))
                }
            </LeafletMap>
        </div>
    )
}
