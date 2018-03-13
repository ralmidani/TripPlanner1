const mapboxgl = require('mapbox-gl');

const buildMarker = (markerType, latLng) => {
    let background;
    if (markerType === 'activity') {
        background = 'http://i.imgur.com/WbMOfMl.png'
    }
    else if (markerType === 'hotel') {
        background = 'http://i.imgur.com/D9574Cu.png'
    }
    else if (markerType === 'restaurant') {
        background = 'http://i.imgur.com/cqR6pUI.png'
    }
    const markerDomEl = document.createElement("div");
    markerDomEl.style.width = "32px";
    markerDomEl.style.height = "39px";
    markerDomEl.style.backgroundImage = `url(${background})`;

    return new mapboxgl.Marker(markerDomEl).setLngLat(latLng);
};

module.exports = buildMarker;