import React from 'react';
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '100%',
};

const center = {
  lat: -3.745,
  lng: -38.523,
};

function Maps() {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: 'AIzaSyA2Zlib9uUKNf0uhGI9NhO-AgQ38fjSykk',
  });

  const [map, setMap] = React.useState(null);

  const onLoad = React.useCallback(
    function callback(map) {
      // This is just an example of getting and using the map instance!!! don't just blindly copy!
      const bounds = new window.google.maps.LatLngBounds(center);
      map.fitBounds(bounds);

      setMap(map);
    },
    [setMap]
  );

  const onUnmount = React.useCallback(
    function callback(map) {
      setMap(null);
    },
    [setMap]
  );

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={20}
      onLoad={onLoad}
      onUnmount={onUnmount}
    >
      {/* Child components, such as markers, info windows, etc. */}
      <Marker position={center} />
    </GoogleMap>
  ) : (
    <div>Some thing went wrong</div>
  );
}

export default React.memo(Maps);
