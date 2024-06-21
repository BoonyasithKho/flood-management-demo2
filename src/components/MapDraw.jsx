import { useState } from "react";
import "leaflet/dist/leaflet.css";
import { MapContainer, Marker, Popup, TileLayer, WMSTileLayer, useMapEvents, Polygon } from "react-leaflet";
import locationMark from '../assets/location.png'
import { Icon, icon, polyline } from "leaflet";
import L from 'leaflet'
import { Box } from "@mui/system";


const purpleOptions = { color: 'purple' }
let polygons = []
let points = []



function MapDraw() {
    const [map, setMap] = useState(null);
    window.map = map;
    const [center, setCenter] = useState({ lat: 13.000, lng: 100.000 });
    let [poly, setPoly] = useState(polygons);
    let [mulpoint, setMulpoint] = useState(points);

    var locations = [
        [11.8166, 122.0942],
        [11.9804, 121.9189],
        [10.7202, 122.5621],
        [11.3889, 122.6277],
        [10.5929, 122.6325]
    ];
    var locationss = [
        { lat: 11.8166, lng: 122.0942 },
        { lat: 11.9804, lng: 121.9189 },
        { lat: 10.7202, lng: 122.5621 },
        { lat: 11.3889, lng: 122.6277 },
        { lat: 10.5929, lng: 122.632 },
    ];


    const [point, setPoint] = useState();
    const [first, setFirst] = useState()

    const ZOOM_LEVEL = 6;


    const markerIcon = new Icon({
        iconUrl: locationMark,
        iconSize: [35, 45],
    })

    const Bbb = () => {
        const map = useMapEvents({
            click(e) {
                // map.locate();
                console.log(e.latlng.lat)
                // console.log(L.Draw)
                // polygon.push([e.latlng.lat, e.latlng.lng]);

                // polygons = [
                //     [13, 100],
                //     // [12, 100],
                //     // [13, 101],
                // ];


                // polygons.push([e.latlng.lat, e.latlng.lng])
                // console.log(polygons)
                // setPoly(polygons)

                if (first == null) {
                    setFirst([e.latlng.lat, e.latlng.lng])
                    polygons = [
                        [e.latlng.lat, e.latlng.lng],
                    ];
                    points = [
                        { lat: e.latlng.lat, lng: e.latlng.lng },
                    ];
                }
                else {
                    polygons.push([e.latlng.lat, e.latlng.lng])
                    points.push({ lat: e.latlng.lat, lng: e.latlng.lng })

                }
                console.log(polygons)
                setPoly(polygons)

                console.log(points)
                setMulpoint(points)

                // var polyEdit = new L.Draw.Polygon(window.map);
                // polyEdit.enable();
                // polyEdit.addVertex(e.latlng);

            },

            // locationfound(e) {
            // setPosition(e.latlng)
            // map.flyTo(e.latlng, map.getZoom())
            // },
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
            {mulpoint.map((pointLocate, index) => (
                <Marker position={pointLocate} icon={markerIcon} key={index} />
            ))
            }
            <Marker position={center} icon={markerIcon}>
                <Popup>
                    A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>
            </Marker>
            <Bbb />
            {
                first == null ? <Box /> :
                    <Marker position={first} icon={markerIcon}>
                        <Popup>
                            A pretty CSS3 popup. <br /> Easily customizable.
                        </Popup>
                    </Marker>
            }
            {
                point == null ? <Box />
                    :
                    <Marker position={point} icon={markerIcon}>
                        <Popup>
                            A pretty CSS3 popup. <br /> Easily customizable.
                        </Popup>
                    </Marker>
            }

            <Polygon pathOptions={purpleOptions} positions={locations} />
        </MapContainer >
    );
}

export default MapDraw;

// function LocationMarker() {
//     const [position, setPosition] = useState(null)
//     const map = useMapEvents({
//         click(e) {
//             // map.locate();
//             console.log(e.latlng.lat)
//             // console.log(L.Draw)
//             polygon.push([e.latlng.lat, e.latlng.lng]);

//             setPoly(polygon)
//             console.log(polygon)
//             // var polyEdit = new L.Draw.Polygon(window.map);
//             // polyEdit.enable();
//             // polyEdit.addVertex(e.latlng);

//         },
//         locationfound(e) {
//             // setPosition(e.latlng)
//             // map.flyTo(e.latlng, map.getZoom())
//         },
//     })

//     return position === null ? null : (
//         <Marker position={position}>
//             <Popup>You are here</Popup>
//         </Marker>
//     )
// }
