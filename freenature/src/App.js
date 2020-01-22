import React from 'react'
import { Map as LeafletMap, TileLayer, Marker, Popup } from 'react-leaflet';

class Map extends React.Component {
  render() {
    return (
      <div class="body">
            <div class='map'>


            <LeafletMap
              center={[50, 10]}
              zoom={4}
              maxZoom={10}
              attributionControl={true}
              zoomControl={true}
              doubleClickZoom={true}
              scrollWheelZoom={true}
              dragging={true}
              animate={true}
              easeLinearity={0.35}
            >
              <TileLayer 
                url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
              />
              
              <Marker position={[50, 10]}>
                <Popup>
                  Popup for any custom information.
                </Popup>
              </Marker>
            </LeafletMap>
            </div>
      </div>
    );
  }
}

export default Map