function preusmeriBtn() {
  window.location.href = "mainPage.html";
}

//Google map
var googleMapsLayer = new ol.layer.Tile({
  source: new ol.source.XYZ({
      url: 'https://mt1.google.com/vt/lyrs=m&hl=en&x={x}&y={y}&z={z}',
  }),
  visible: true 
});

//Yandex
var yandexLayer = new ol.layer.Tile({
    source: new ol.source.XYZ({
        url: 'https://core-renderer-tiles.maps.yandex.net/tiles?l=map&x={x}&y={y}&z={z}&scale=1'
    }),
    visible: false
});

//OpenStreet
var openStreetLayer = new ol.layer.Tile({
  source: new ol.source.XYZ({
      url: 'https://{a-c}.tile.openstreetmap.org/{z}/{x}/{y}.png'
  }),
  visible: false
});

//Drzava
var drzavaGeoserverLayer = new ol.layer.Image({
  source: new ol.source.ImageWMS({
      url: 'http://localhost:8080/geoserver/cite/wms?service=WMS',
      params: { 'LAYERS': 'cite:drzava' },
      serverType: 'geoserver'
  }),
  visible: false
});

//Rezervati prirode
var rezervatiGeoserverLayer = new ol.layer.Image({
  source: new ol.source.ImageWMS({
      url: 'http://localhost:8080/geoserver/cite/wms?service=WMS',
      params: { 'LAYERS': 'cite:eco_rezervat_prirode_p' },
      serverType: 'geoserver'
  }),
  visible: false
});

//Termoelektrane
var termoelektraneGeoserverLayer = new ol.layer.Image({
  source: new ol.source.ImageWMS({
      url: 'http://localhost:8080/geoserver/cite/wms?service=WMS',
      params: { 'LAYERS': 'cite:power_plants' },
      serverType: 'geoserver'
  }),
  visible: false
});

//Reke
var rekeGeoserverLayer = new ol.layer.Image({
  source: new ol.source.ImageWMS({
      url: 'http://localhost:8080/geoserver/cite/wms?service=WMS',
      params: { 'LAYERS': 'cite:eco_os_reke_direkcija' },
      serverType: 'geoserver'
  }),
  visible: false
});

//Pokrajna
var pokrajnaGeoserverLayer = new ol.layer.Image({
  source: new ol.source.ImageWMS({
      url: 'http://localhost:8080/geoserver/cite/wms?service=WMS',
      params: { 'LAYERS': 'cite:eco_os_pokrajina' },
      serverType: 'geoserver'
  }),
  visible: false
});

//Opstine
var opstineGeoserverLayer = new ol.layer.Image({
  source: new ol.source.ImageWMS({
      url: 'http://localhost:8080/geoserver/cite/wms?service=WMS',
      params: { 'LAYERS': 'cite:opstine' },
      serverType: 'geoserver'
  }),
  visible: false
});

//Cenej
var cenejGeoserverLayer = new ol.layer.Image({
  source: new ol.source.ImageWMS({
      url: 'http://localhost:8080/geoserver/cite/wms?service=WMS',
      params: { 'LAYERS': '	cite:Cenej' },
      serverType: 'geoserver'
  }),
  visible: false
});

// Inicijalizacija OpenLayers mape
var map = new ol.Map({
  target: 'map',
  layers: [
      googleMapsLayer,
      yandexLayer,
      openStreetLayer,
      drzavaGeoserverLayer,
      rezervatiGeoserverLayer,
      termoelektraneGeoserverLayer,
      rekeGeoserverLayer,
      pokrajnaGeoserverLayer,
      opstineGeoserverLayer,
      cenejGeoserverLayer

  ],
  view: new ol.View({
      center: ol.proj.fromLonLat([20, 44]),
      zoom: 6
  })
});


// Funkcija za promenu bazne mape
function changeBaseMap() {
  var baseMapSelector = document.getElementById("baseMapSelector");
  var selectedMap = baseMapSelector.value;

  // Isključi sve slojeve baznih mapa
  [googleMapsLayer, yandexLayer, openStreetLayer].forEach(function (layer) {
      layer.setVisible(false);
  });

  // Uključi samo izabranu baznu mapu
  switch (selectedMap) {
      case 'googleMaps':
          googleMapsLayer.setVisible(true);
          break;
      case 'yandex':
          yandexLayer.setVisible(true);
          break;
      case 'openStreet':
          openStreetLayer.setVisible(true);
          break;
  }
}

// Funkcija za vidljivost sloja
function toggleLayerVisibility(layer) {
  layer.setVisible(!layer.getVisible()); 
}

