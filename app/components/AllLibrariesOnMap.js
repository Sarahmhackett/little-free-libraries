"use client";
import { useState, useEffect, useRef } from "react";
import Map from "react-map-gl";
import { Marker, Popup } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { PiBookOpenFill } from "react-icons/pi";
import styles from "./AllLibrariesOnMap.module.css";

const center = {
  longitude: -1.5303113,
  latitude: 53.7922978,
};

const AllLibrariesOnMap = ({ serialisedAllLibraries }) => {
  const [selectedLibrary, setSelectedLibrary] = useState(null);
  const mapRef = useRef();

  const getScreenPosition = () => {
    if (!selectedLibrary || !mapRef.current) return null;
    const point = mapRef.current.project([
      selectedLibrary.lng,
      selectedLibrary.lat,
    ]);
    return point;
  };

  const screenPosition = getScreenPosition();

  useEffect(() => {
    if (selectedLibrary) {
      console.log("Selected library updated:", selectedLibrary);
    }
  }, [selectedLibrary]);
  return (
    <div>
      <div style={{ position: "relative" }}>
        <Map
          ref={mapRef}
          mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_TOKEN}
          initialViewState={{
            longitude: center.longitude,
            latitude: center.latitude,
            zoom: 10,
          }}
          style={{ width: "100%", height: 500 }}
          mapStyle="mapbox://styles/mapbox/streets-v12"
        >
          {serialisedAllLibraries.map((library) => (
            <Marker
              key={library.id || library._id}
              longitude={library.lng}
              latitude={library.lat}
              anchor="bottom"
            >
              <div
                onClick={() => {
                  setSelectedLibrary(library);
                }}
                style={{ cursor: "pointer" }}
              >
                <PiBookOpenFill size={30} color="blue" />
              </div>
            </Marker>
          ))}

          {selectedLibrary && screenPosition && (
            <div
              onClick={() => setSelectedLibrary(null)}
              style={{
                position: "absolute",
                left: screenPosition.x,
                top: screenPosition.y,
                transform: "translate(-50%, -100%)",
                background: "white",
                padding: "10px",
                border: "1px solid black",
                zIndex: 1000,
              }}
            >
              <h3>{selectedLibrary.name}</h3>
              <p>{selectedLibrary.street}</p>
            </div>
          )}
        </Map>
      </div>
    </div>
  );
};

export default AllLibrariesOnMap;
