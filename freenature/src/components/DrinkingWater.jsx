import React from 'react';
import { Map as LeafletMap, GeoJSON, TileLayer, Popup } from 'react-leaflet';
import PopUp from './PopUp';
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
                <TileLayer url='https://tiles.wmflabs.org/hikebike/{z}/{x}/{y}.png' attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' />
                {
                    bivakzones.features
                        .filter((bivak) => bivak.properties.openfire === 'yes')


                        .map((bivak) => (
                            <GeoJSON
                                data={bivak}
                                style={() => ({
                                    color: '#4a83ec',
                                    weight: 0.5,
                                    fillColor: "#1a1d62",
                                    fillOpacity: 1,
                                })}>
                                <Popup>
                                    <PopUp bivakzone={bivak} />
                                    <a href="/">{bivak.properties.name}</a>
                                </Popup>
                            </GeoJSON>
                        ))
                }
            </LeafletMap>



        </div>
    )
}
