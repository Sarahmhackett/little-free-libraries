"use client";

import Map from "react-map-gl";
import { Marker } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { PiBookOpenFill } from "react-icons/pi";
import styles from "./LibraryItemOnMap.module.css";

const LibraryItemMap = ({ library }) => {
  const { lat, lng } = library;

  return (
    <div>
      <div>
        <Map
          mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_TOKEN}
          mapLib={import("mapbox-gl")}
          initialViewState={{
            longitude: lng,
            latitude: lat,
            zoom: 15,
          }}
          style={{ width: "100%", height: 500 }}
          mapStyle="mapbox://styles/mapbox/streets-v12"
        >
          <Marker longitude={lng} latitude={lat} anchor="bottom">
            <div className={styles.markerText}>I'm here!</div>
            <PiBookOpenFill size={50} color="rgb(217, 97, 135)" />
          </Marker>
        </Map>
      </div>
    </div>
  );
};

export default LibraryItemMap;
