import { GoogleMap, useJsApiLoader, Polyline, Marker } from "@react-google-maps/api";
import { useState, useEffect } from "react";

const path = [
  { lat: 14.9167, lng: 79.9842 }, // Kavali
  { lat: 15.2167, lng: 79.9000 }, // Kandukur
  { lat: 15.5057, lng: 80.0499 }, // Ongole
  { lat: 13.0827, lng: 80.2707 }, // Chennai
];

export default function MapRoute() {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: "YOUR_GOOGLE_MAPS_API_KEY",
  });

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % path.length);
    }, 1500);

    return () => clearInterval(interval);
  }, []);

  if (!isLoaded) return <p>Loading Map...</p>;

  return (
    <GoogleMap
      center={path[index]}
      zoom={6}
      mapContainerStyle={{ width: "100%", height: "400px" }}
    >
      <Polyline path={path} options={{ strokeColor: "#facc15" }} />

      {/* Moving car marker */}
      <Marker position={path[index]} />
    </GoogleMap>
  );
}