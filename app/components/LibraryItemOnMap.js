"use client";

import Map from "react-map-gl";
import { useState } from "react";
import Image from "next/image";
import { Marker } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { PiBookOpenFill } from "react-icons/pi";
import styles from "./LibraryItemOnMap.module.css";

const LibraryItemMap = ({ library }) => {
  const { lat, lng, image } = library;
  const [hovered, setHovered] = useState(false);

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
            <div style={{ position: "relative", display: "inline-block" }}>
              <PiBookOpenFill size={50} color="rgb(217, 97, 135)" />

              <div
                style={{
                  position: "absolute",
                  bottom: "100%",
                  left: "50%",
                  transform: "translateX(-50%)",
                  marginBottom: "10px",
                  padding: "5px",
                  backgroundColor: "white",
                  borderRadius: "8px",
                  boxShadow: "0 2px 10px rgba(0,0,0,0.2)",
                  zIndex: 10,
                  width: "120px",
                  textAlign: "center",
                }}
              >
                <Image
                  src={image}
                  alt="Library Preview"
                  width={100}
                  height={100}
                  style={{ borderRadius: "6px" }}
                />
              </div>
            </div>
          </Marker>
        </Map>
      </div>
    </div>
  );
};

export default LibraryItemMap;
