function LoadNAVBAR(){
    const allElements = document.getElementsByTagName('*');
    let isLoading = false;
    for(var i=0; i<allElements.length; i++){
        var el=allElements[i];
        var navpath = el.getAttribute("nav-include-path");
        if(navpath){
            var xhttp= new XMLHttpRequest();
            xhttp.onreadystatechange = function(){
                if(this.readyState===4 && this.status===200){
                    el.innerHTML = this.responseText;
                    el.removeAttribute("nav-include-path");
                    isLding = true;
                }
            };
            xhttp.open("GET",navpath,true);
            xhttp.send();
            break;
        }
    }
    if (isLoading) {
        LoadNAVBAR();
    }
}

document.addEventListener('DOMContentLoaded', function() {
    var defaultMapSetting = {
        center: new naver.maps.LatLng(37.6009, 126.8643),
        zoom: 15
    };
    var naverMap = new naver.maps.Map('navermap_div', defaultMapSetting);
});

