"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";

import Map from "react-map-gl";
import { Marker, Popup } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { PiBookOpenFill } from "react-icons/pi";
import { IoCloseCircleOutline } from "react-icons/io5";
import styles from "./AllLibrariesOnMap.module.css";

const center = {
  longitude: -1.527374,
  latitude: 53.835476,
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
            zoom: 12,
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
                onClick={() =>
                  setSelectedLibrary(
                    selectedLibrary?._id === library._id ? null : library
                  )
                }
                style={{ cursor: "pointer" }}
              >
                <PiBookOpenFill size={30} color="rgb(217, 97, 135)" />
              </div>
            </Marker>
          ))}

          {selectedLibrary && screenPosition && (
            <div
              className={styles.popUp}
              onClick={() => setSelectedLibrary(null)}
              style={{
                position: "absolute",
                left: screenPosition.x,
                top: screenPosition.y,
              }}
            >
              <IoCloseCircleOutline
                size={30}
                color="white"
                className={styles.closeIcon}
              />

              <div className={styles.popupContent}>
                <h3 className={styles.title}>{selectedLibrary.name}</h3>
                <p className={styles.body}>{selectedLibrary.street}</p>

                <Link
                  href={`/library-details/${selectedLibrary._id}`}
                  className={styles.link}
                >
                  See Details
                </Link>
                {console.log("SELECTED LIBRARY: ", selectedLibrary)}
              </div>
            </div>
          )}
        </Map>
      </div>
    </div>
  );
};

export default AllLibrariesOnMap;
