import React from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { useLoaderData } from 'react-router';
import { useRef } from 'react';
const CoveragePage = () => {
    const centers = useLoaderData();
    // console.log(centers);
    const position = [23.6850, 90.3563];
    const mapRef = useRef(null);
    const handleSearch = (e) => {
        e.preventDefault();
        const location = e.target.location.value;
        const district = centers.find(c => c.district.toLowerCase()
            .includes(location.toLowerCase()));
        if (district) {
            const coord = [district.latitude, district.longitude];
            mapRef.current.flyTo(coord,14)
        }


    }
    return (
        <>
            <div className='w-11/12 mx-auto my-10'>
                <form onSubmit={handleSearch}>
                    < label className="input">
                        <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <g
                                strokeLinejoin="round"
                                strokeLinecap="round"
                                strokeWidth="2.5"
                                fill="none"
                                stroke="currentColor"
                            >
                                <circle cx="11" cy="11" r="8"></circle>
                                <path d="m21 21-4.3-4.3"></path>
                            </g>
                        </svg>
                        <input type="search" className="grow" name='location' placeholder="Search Service Center" />
                    </label>
                </form>
            </div>
            <div className={`border w-11/12 h-200 mx-auto my-20 rounded-xl`}>
                <MapContainer
                    center={position}
                    zoom={8}
                    scrollWheelZoom={false}
                    ref={mapRef}
                    className='h-200 rounded-xl'
                >
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    {
                        centers.map(center => {
                            return <Marker key={center.id} position={[center.latitude, center.longitude]}>
                                <Popup>
                                    <strong>{center.district}</strong> <br />  Servie Area : {center.covered_area.join(', ')}.
                                </Popup>
                            </Marker>
                        })
                    }
                </MapContainer>
            </div>
        </>
    );

};

export default CoveragePage;