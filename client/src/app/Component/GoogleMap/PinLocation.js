import React, { useEffect, useState } from 'react';
import mapboxgl from 'mapbox-gl';

const ACCESS_TOKEN = 'pk.eyJ1Ijoic3BlY25nIiwiYSI6ImNrZXg3N3dlOTA2cjgydGxieG80czFjODUifQ.WR9WrMxOGB6EdiXonbuzQQ';

const PinLocation = ({ lat, lng }) => {
  const [marker, setMarker] = useState(null);
  let map;

  const addMarker = (lngLat) => {
    if (lngLat && !isNaN(lngLat[0]) && !isNaN(lngLat[1])) {
      if (marker) {
        marker.remove();
      }

      const customIcon = document.createElement('img');
      customIcon.src = '/images/marker1.png';
      customIcon.style.width = '3vw';
      customIcon.style.height = '3vw';
      customIcon.style.marginTop = '-1.2vw';

      const newMarker = new mapboxgl.Marker({ element: customIcon }).setLngLat(lngLat).addTo(map);
      setMarker(newMarker);
    }
  };

  useEffect(() => {
    mapboxgl.accessToken = ACCESS_TOKEN;

    map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v12',
      center: [lat, lng], // Note: Order is [lng, lat]
      zoom: 12.8,
    });

    // Add zoom and rotation controls to the map.
    map.addControl(new mapboxgl.NavigationControl());
    map.addControl(new mapboxgl.ScaleControl());
    map.addControl(new mapboxgl.FullscreenControl());
    map.on('load', () => {
      // Add GeolocateControl only after the map has loaded
      map.addControl(new mapboxgl.GeolocateControl());      
      addMarker([lat, lng]);
    });
  }, [lat, lng]);

  

  return (
    <div className='relative'>
      <div id="map" style={{ position: 'absolute', width: '100%', height: '25vw' }} />
    </div>
  );
};

export default PinLocation;
