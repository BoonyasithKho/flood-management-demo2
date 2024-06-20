import { useState } from "react";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, WMSTileLayer } from "react-leaflet";

function Maps() {
    const [map, setMap] = useState(null);
    window.map = map;
    return (

        <MapContainer
            style={{ width: "100%", height: "calc(100vh - 75px)" }
            }
            zoom={6}
            center={[13, 100]}
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
            <WMSTileLayer
                url="https://service-proxy-765rkyfg3q-as.a.run.app/api_geoserver/geoserver/dri/wms"
                params={{
                    format: "image/png",
                    layers: "dri:province_with_c_dri",
                    transparent: true,
                }}
            />
        </MapContainer >
    );
}

export default Maps;
