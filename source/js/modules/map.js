const LOCATION = {
  center: [30.322490392818388, 59.93746200357759],
  zoom: 16,
};

export function initMap() {

  const script = document.createElement('script');
  script.src = 'https://api-maps.yandex.ru/3.0/?apikey=6d667e0b-f3db-4f0a-9068-fe60daadc083&lang=ru-RU';
  document.body.appendChild(script);

  script.onload = () => {

    const {ymaps3} = window;

    if (typeof ymaps3 === 'undefined') {
      return;
    }

    ymaps3.ready.then(() => {
      const {
        YMap,
        YMapDefaultSchemeLayer,
        YMapControls,
        YMapDefaultFeaturesLayer,
        YMapMarker,
      } = ymaps3;

      const map = new YMap(document.getElementById('map'), {location: LOCATION});

      map.addChild(new YMapDefaultSchemeLayer());
      map.addChild(new YMapDefaultFeaturesLayer());


      ymaps3.import('@yandex/ymaps3-controls@0.0.1').then((res) => {
        const {YMapZoomControl} = res;
        map.addChild(new YMapControls({position: 'right'}).addChild(new YMapZoomControl({})));
      });

      const pin = document.createElement('div');
      pin.innerHTML = '<svg width="27" height="26" viewBox="0 0 27 26"><use xlink:href="img/sprite.svg#pin"></use></svg>';
      pin.className = 'pin';
      map.addChild(new YMapMarker({coordinates: LOCATION.center}, pin));
    });
  };
}
