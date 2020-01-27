import React from 'react';
import { Map as LeafletMap, GeoJSON, TileLayer, Popup } from 'react-leaflet';
import PopUp from './PopUp';
import bivakzones from './bivakzones.json';


class MapBe extends React.Component {
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
                    bivakzones.features.map((bivakzone) => (
                        <GeoJSON
                            data={bivakzone}
                            style={() => ({
                                color: '#4a83ec',
                                weight: 0.5,
                                fillColor: "#1a1d62",
                                fillOpacity: 1,
                            })}>
                            <Popup>
                                <PopUp bivakzone={bivakzone} />
                                <a href="/page1">{bivakzone.properties.name}</a>
                            </Popup>
                        </GeoJSON>
                    ))
                }
            </LeafletMap>
        );
    }
}

export default MapBe;

