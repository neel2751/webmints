"use client";

import { useEffect, useRef } from "react";

export default function InteractiveMap({ locations, apiKey }) {
  const mapRef = useRef(null);

  useEffect(() => {
    if (!mapRef.current || !apiKey) return;

    // Load Google Maps script
    const script = document.createElement("script");
    script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&callback=initMap`;
    script.async = true;
    script.defer = true;

    // Initialize map
    window.initMap = () => {
      if (!mapRef.current) return;

      // Calculate center point
      const centerLat =
        locations.reduce((sum, loc) => sum + loc.coordinates.lat, 0) /
        locations.length;
      const centerLng =
        locations.reduce((sum, loc) => sum + loc.coordinates.lng, 0) /
        locations.length;

      // Create map with dark theme
      const map = new window.google.maps.Map(mapRef.current, {
        center: { lat: centerLat, lng: centerLng },
        zoom: 7,
        styles: [
          { elementType: "geometry", stylers: [{ color: "#242f3e" }] },
          {
            elementType: "labels.text.stroke",
            stylers: [{ color: "#242f3e" }],
          },
          { elementType: "labels.text.fill", stylers: [{ color: "#746855" }] },
          {
            featureType: "administrative.locality",
            elementType: "labels.text.fill",
            stylers: [{ color: "#d59563" }],
          },
          {
            featureType: "poi",
            elementType: "labels.text.fill",
            stylers: [{ color: "#d59563" }],
          },
          {
            featureType: "poi.park",
            elementType: "geometry",
            stylers: [{ color: "#263c3f" }],
          },
          {
            featureType: "poi.park",
            elementType: "labels.text.fill",
            stylers: [{ color: "#6b9a76" }],
          },
          {
            featureType: "road",
            elementType: "geometry",
            stylers: [{ color: "#38414e" }],
          },
          {
            featureType: "road",
            elementType: "geometry.stroke",
            stylers: [{ color: "#212a37" }],
          },
          {
            featureType: "road",
            elementType: "labels.text.fill",
            stylers: [{ color: "#9ca5b3" }],
          },
          {
            featureType: "road.highway",
            elementType: "geometry",
            stylers: [{ color: "#746855" }],
          },
          {
            featureType: "road.highway",
            elementType: "geometry.stroke",
            stylers: [{ color: "#1f2835" }],
          },
          {
            featureType: "road.highway",
            elementType: "labels.text.fill",
            stylers: [{ color: "#f3d19c" }],
          },
          {
            featureType: "transit",
            elementType: "geometry",
            stylers: [{ color: "#2f3948" }],
          },
          {
            featureType: "transit.station",
            elementType: "labels.text.fill",
            stylers: [{ color: "#d59563" }],
          },
          {
            featureType: "water",
            elementType: "geometry",
            stylers: [{ color: "#17263c" }],
          },
          {
            featureType: "water",
            elementType: "labels.text.fill",
            stylers: [{ color: "#515c6d" }],
          },
          {
            featureType: "water",
            elementType: "labels.text.stroke",
            stylers: [{ color: "#17263c" }],
          },
        ],
      });

      // Add markers for each location
      locations.forEach((location) => {
        const marker = new window.google.maps.Marker({
          position: location.coordinates,
          map: map,
          title: location.name,
          icon: {
            path: window.google.maps.SymbolPath.CIRCLE,
            scale: 12,
            fillColor: "#4f46e5",
            fillOpacity: 1,
            strokeColor: "#ffffff",
            strokeWeight: 2,
          },
          animation: window.google.maps.Animation.DROP,
        });

        // Add info window
        const infoWindow = new window.google.maps.InfoWindow({
          content: `
          <div style="color: #000;">
            <h3 style="margin-top:0;">${location.name}</h3>
            <p><strong>${location.company}</strong></p>
            <p>${location.address.join("<br>")}</p>
            </div>
          `,
        });

        marker.addListener("click", () => {
          infoWindow.open(map, marker);
        });
      });
    };

    document.head.appendChild(script);

    return () => {
      const existingScript = document.querySelector(
        `script[src^="https://maps.googleapis.com/maps/api/js"]`
      );
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, [locations, apiKey]);

  if (!apiKey) {
    return (
      <div className="flex items-center justify-center h-full text-gray-400 p-8 text-center bg-gray-800">
        <div>
          <svg
            className="w-12 h-12 mx-auto mb-4 opacity-50"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
          <p className="text-sm">
            Add NEXT_PUBLIC_GOOGLE_MAPS_API_KEY to display interactive map
          </p>
        </div>
      </div>
    );
  }

  return <div ref={mapRef} className="w-full h-full" />;
}
