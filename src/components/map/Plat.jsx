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
import GEOJSON from '../../data/geojson.json';
import WALK_GEOJSON from '../../data/walk-geojson.json';
import { useMemo, useState } from 'react';
import { IconPlaneTilt, IconConfetti, IconBusStop, IconBus, IconBuildingArch, IconToolsKitchen2 } from '@tabler/icons-react';

const TOKEN = 'pk.eyJ1IjoicXU0azMiLCJhIjoiY2wxY25pYXEzMDljZjNqbzI2eWRhbXR3ZSJ9.vOLta-r7RB264oxtGL_x3w';

const iconMap = {
  confetti: <IconConfetti className='map-icon' />,
  planeTilt: <IconPlaneTilt className='map-icon' />,
  busStop: <IconBusStop className='map-icon' />,
  busStation: <IconBus className='map-icon' />,
  monument: <IconBuildingArch className='map-icon' />,
  tapas: <IconToolsKitchen2 className='map-icon' />
};

const Plat = () => {
  const [popupInfo, setPopupInfo] = useState(null);

  const pins = useMemo(
    () =>
      MARKERS.map((marker, index) => (
        <Marker
          key={`marker-${index}`}
          longitude={marker.longitude}
          latitude={marker.latitude}
          anchor="center"
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
          anchor="bottom"
          offset={30}
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

      <Source id="dataAccommodation" type="geojson" data={GEOJSON}>
        <Layer
          id="fillAccommodation"
          type="fill"
          source="dataAccommodation"
          layout={{
            "fill-join": "round",
            "fill-cap": "round"
          }}
          paint={{
            "fill-color": "rgba(232, 188, 205, 0.4)",
          }}
        />
        <Layer
          id="lineAccommodation"
          type="line"
          source="dataAccommodation"
          layout={{
            "line-join": "round",
            "line-cap": "round"
          }}
          paint={{
            "line-color": "rgba(232, 188, 205, 0.8)",
            "line-width": 2
          }}
        />
      </Source>

      <Source id="dataWalk" type="geojson" data={WALK_GEOJSON}>
        <Layer
          id="lineWalk"
          type="line"
          source="dataWalk"
          layout={{
            "line-join": "round",
            "line-cap": "round"
          }}
          paint={{
            "line-color": "rgba(232, 188, 205, 0.9)",
            "line-width": 8
          }}
        />
      </Source>
    </Map>
  );
}

export default Plat;