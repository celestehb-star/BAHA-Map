mapboxgl.accessToken = 'pk.eyJ1IjoiY2VsZXN0ZWhiIiwiYSI6ImNtaDlyN2F2dDFmZXQybG9hamx3cWwyM2sifQ.sDmtrL-2Urw1QrRbdyAEyg';

const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/celestehb/cmh9rcrkz00a301rabntxdg99',
    center: [-122.27, 37.85
    ],
    zoom: 12
});

map.on('load', function() {
    // Add GeoJSON source
    map.addSource('points-data', {
        type: 'geojson',
        data: 'https://raw.githubusercontent.com/celestehb-star/BAHA-Map/refs/heads/main/data/183data.geojson'
    });

    // Add marker layer
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

    // Click event for popups
    map.on('click', 'points-layer', (e) => {
        const coordinates = e.features[0].geometry.coordinates.slice();
        const properties = e.features[0].properties;

        const popupContent = `
            <div>
                <h3>${properties.Landmark}</h3>
                <p><strong>Address:</strong> ${properties.Address}</p>
                <p><strong>Architect & Date:</strong> ${properties.Architect_Date}</p>
                <p><strong>Designated:</strong> ${properties.Designated}</p>
                ${properties.Link ? `<p><a href="${properties.Link}" target="_blank">More Information</a></p>` : ''}
                ${properties.Notes ? `<p><strong>Notes:</strong> ${properties.Notes}</p>` : ''}
            </div>
        `;

        // Build and attach popup to coordinates
          new mapboxgl.Popup()
              .setLngLat(coordinates)
              .setHTML(popupContent)
              .addTo(map);
      });

      // Change cursor to pointer when hovering over points
      map.on('mouseenter', 'points-layer', () => {
              map.getCanvas().style.cursor = 'pointer';
      });

      // Change cursor back when leaving points
      map.on('mouseleave', 'points-layer', () => {
            map.getCanvas().style.cursor = '';
      });       
  });
  ``
