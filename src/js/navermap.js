document.addEventListener('DOMContentLoaded', function() {
    var defaultMapSetting = {
        center: new naver.maps.LatLng(37.6009, 126.8643),
        zoom: 10
    };
    var naverMap = new naver.maps.Map('navermap_div', defaultMapSetting);
});