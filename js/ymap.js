ymaps.ready(init);
    function init(){
            // Создание карты.
        var myMap = new ymaps.Map("map", {
            center: [55.715449,37.709398],
            controls: ['geolocationControl'],
            zoom: 11
        });

            // Создание геообъекта с типом точка (метка).
        var myGeoObject = new ymaps.GeoObject({
            geometry: {
            type: "Point", // тип геометрии - точка
                coordinates: [55.715449,37.709398] // координаты точки
                }
            });

                // Размещение геообъекта на карте.
            myMap.geoObjects.add(myGeoObject);
}