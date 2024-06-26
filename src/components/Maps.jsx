import { useState } from "react";
import "leaflet/dist/leaflet.css";
import { MapContainer, Marker, Popup, TileLayer, WMSTileLayer } from "react-leaflet";
import locationMark from '../assets/location.png'
import { Icon } from "leaflet";

function Maps() {
    const [map, setMap] = useState(null);
    window.map = map;
    const [center, setCenter] = useState({ lat: 13.000, lng: 100.000 });
    const ZOOM_LEVEL = 6;

    const markerIcon = new Icon({
        iconUrl: locationMark,
        iconSize: [35, 45],
        iconAnchor: [19, 38],
    })

    return (

        <MapContainer
            style={{ width: "100%", height: "calc(100vh - 75px)" }
            }
            zoom={ZOOM_LEVEL}
            center={center}
            scrollWheelZoom={false}
            fadeAnimation={true}
            markerZoomAnimation={true}
            zoomControl={false}
            ref={setMap}
        >
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {/* <WMSTileLayer
                url="https://service-proxy-765rkyfg3q-as.a.run.app/api_geoserver/geoserver/dri/wms"
                params={{
                    format: "image/png",
                    layers: "dri:province_with_c_dri",
                    transparent: true,
                }}
            /> */}
            <Marker position={center} icon={markerIcon}>
                <Popup>
                    A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>
            </Marker>
        </MapContainer >
    );
}

export default Maps;
