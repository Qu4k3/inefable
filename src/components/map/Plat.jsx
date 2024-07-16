import Map, {
  Marker,
  Popup,
  NavigationControl,
  FullscreenControl,
  GeolocateControl,
  Source,
  Layer
} from 'react-map-gl';
import * as turf from '@turf/turf';

import MARKERS from '../../data/markers.json';
import { useMemo, useState } from 'react';
import { IconPlaneTilt, IconConfetti, IconBusStop, IconMapPinFilled } from '@tabler/icons-react';

const TOKEN = 'pk.eyJ1IjoicXU0azMiLCJhIjoiY2wxY25pYXEzMDljZjNqbzI2eWRhbXR3ZSJ9.vOLta-r7RB264oxtGL_x3w';

const iconMap = {
  confetti: <IconConfetti />,
  planeTilt: <IconPlaneTilt />,
  busStop: <IconBusStop />
};

const Plat = () => {
  const [popupInfo, setPopupInfo] = useState(null);

  const dataOne = {
    type: "Feature",
    properties: {},
    geometry: {
      type: "LineString",
      coordinates: [
        [36.8482881680691, -2.371349873304754],
        [36.83779239517121, -2.456117349529615]
      ]
    }
  };

  const pins = useMemo(
    () =>
      MARKERS.map((marker, index) => (
        <Marker
          key={`marker-${index}`}
          longitude={marker.longitude}
          latitude={marker.latitude}
          anchor="bottom"
          onClick={e => {
            // If we let the click event propagates to the map, it will immediately close the popup
            // with `closeOnClick: true`
            e.originalEvent.stopPropagation();
            setPopupInfo(marker);
          }}
        >
            {iconMap[marker.icon]}
        </Marker>
      )),
    []
  );

  return (
    <Map
      mapboxAccessToken={TOKEN}
      initialViewState={{
        longitude: -2.81361,
        latitude: 36.77271,
        zoom: 6.8,
        bearing: 0,
        pitch: 0
      }}
      id='map'
      style={{ width: "100%", height: 400 }}
      mapStyle="mapbox://styles/qu4k3/clyo9k9b9016z01pigpt0ejan"
    >
      <GeolocateControl position="top-left" />
      <FullscreenControl position="top-left" />
      <NavigationControl position="top-left" />

      {pins}

      {popupInfo && (
        <Popup
          anchor="top"
          longitude={Number(popupInfo.longitude)}
          latitude={Number(popupInfo.latitude)}
          onClose={() => setPopupInfo(null)}
        >
          <div>
            {popupInfo.city}, {popupInfo.state} |{' '}
            <a
              target="_new"
              href={`http://en.wikipedia.org/w/index.php?title=Special:Search&search=${popupInfo.city}, ${popupInfo.state}`}
            >
              Wikipedia
            </a>
          </div>
          <img width="100%" src={popupInfo.image} />
        </Popup>
      )}

      <Source id="polylineLayer" type="geojson" data={dataOne}>
        <Layer
          id="lineLayer"
          type="line"
          source="my-data"
          layout={{
            "line-join": "round",
            "line-cap": "round"
          }}
          paint={{
            "line-color": "rgba(3, 170, 238, 0.5)",
            "line-width": 5
          }}
        />
      </Source>
    </Map>
  );
}

export default Plat;