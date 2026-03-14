import React from 'react';
import Map, { Marker, NavigationControl } from 'react-map-gl/maplibre';
import 'maplibre-gl/dist/maplibre-gl.css';
import { MapPin } from 'lucide-react';

export default function MapFooter() {
  return (
    <Map
      initialViewState={{
        longitude: -103.3654,
        latitude: 20.6736,
        zoom: 15
      }}
      mapStyle="https://basemaps.cartocdn.com/gl/dark-matter-gl-style/style.json"
      style={{ width: '100%', height: '100%' }}
    >
      <NavigationControl position="top-right" />
      <Marker longitude={-103.3654} latitude={20.6736} anchor="bottom">
        <MapPin color="var(--color-primary)" size={32} />
      </Marker>
    </Map>
  );
}
