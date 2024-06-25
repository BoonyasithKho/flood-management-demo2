import { useState } from "react";
import "leaflet/dist/leaflet.css";
import { MapContainer, Marker, Popup, TileLayer, WMSTileLayer, useMapEvents, Polygon } from "react-leaflet";
import locationMark from '../assets/location.png'
import { Icon, icon, polyline } from "leaflet";
import L from 'leaflet'
import { Box } from "@mui/system";
import SearchIcon from '@mui/icons-material/Search';
import * as turf from "@turf/turf";


// const purpleOptions = { color: 'purple' }
let polygons = []

function MapDistance() {
    const [map, setMap] = useState(null);
    window.map = map;
    const [center, setCenter] = useState({ lat: 13.000, lng: 100.000 });
    let [poly, setPoly] = useState(polygons);
    // const [mulpoint, setMulpoint] = useState(points);
    // const [point, setPoint] = useState();
    const [first, setFirst] = useState('')

    const ZOOM_LEVEL = 6;

    const userLocationMarker = new Icon({
        iconUrl: locationMark,
        iconSize: [35, 45],
        iconAnchor: [19, 38],
    })

    var markerIcon = L.icon({
        iconUrl: locationMark,
        iconSize: [38, 38],
        iconAnchor: [19, 38],
        popupAnchor: [-3, -76],
    });

    const MapMarker = () => {

        const map = useMapEvents({

            click(e) {
                L.marker(e.latlng, { icon: markerIcon }).addTo(map)
                if (first == '') {
                    setFirst([e.latlng.lat, e.latlng.lng])
                    polygons = [
                        [e.latlng.lat, e.latlng.lng],
                    ];
                }
                else {
                    var distance = turf.distance(first, [e.latlng.lat, e.latlng.lng]);
                    console.log(distance);
                    polygons.push([e.latlng.lat, e.latlng.lng])
                    // show distance
                    alert(distance);
                }
                setPoly(polygons)
                L.polyline(polygons, { color: 'red' }).addTo(map)
            },
        })
    }

    return (
        <MapContainer
            ref={setMap}
            style={{ width: "100%", height: "calc(100vh - 75px)" }
            }
            zoom={ZOOM_LEVEL}
            center={center}
            scrollWheelZoom={false}
            fadeAnimation={true}
            markerZoomAnimation={true}
            zoomControl={false}

            whenReady={() => {
                console.log("This function will fire once the map is created")
                // console.log(window.map)

            }}

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
            <Marker position={center} icon={userLocationMarker}>
                <Popup>
                    A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>
            </Marker>
            <MapMarker />
        </MapContainer >
    );
}

export default MapDistance;
