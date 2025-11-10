mapboxgl.accessToken = 'pk.eyJ1IjoiY2VsZXN0ZWhiIiwiYSI6ImNtaDlyN2F2dDFmZXQybG9hamx3cWwyM2sifQ.sDmtrL-2Urw1QrRbdyAEyg';

const map = new mapboxgl.Map({
  container: 'map', // this is the container ID that we set in the HTML
  style: 'mapbox://styles/celestehb/cmh9rcrkz00a301rabntxdg99', // Your Style URL goes here
  center: [-122.27, 37.8], // starting position [lng, lat]. Note that lat must be set between -90 and 90. You can choose what you'd like.
  zoom: 9 // starting zoom, again you can choose the level you'd like.
    });

map.on('load', function() {
    map.addSource('points-data', {
        type: 'geojson',
        data: 'https://raw.githubusercontent.com/celestehb-star/BAHA-Map/refs/heads/main/data/183data.geojson'
    });
  });  
map.addLayer({
        id: 'points-layer',
        type: 'circle',
        source: 'points-data',
        paint: {
            'circle-color': '#4264FB',
            'circle-radius': 6,
            'circle-stroke-width': 2,
            'circle-stroke-color': '#ffffff'
        }
    });
     map.on('click', 'points-layer', (e) => {
      const coordinates = e.features[0].geometry.coordinates.slice();
      const properties = e.features[0].properties;
    });