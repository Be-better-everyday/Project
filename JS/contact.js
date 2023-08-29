function showMap(mapId) {
    var iframes = document.getElementsByClassName('map-container')[0].getElementsByTagName('iframe');
    for (var i = 0; i < iframes.length; i++) {
        iframes[i].style.display = 'none';
    }
    var iframe = document.getElementById(mapId);
    iframe.style.display = 'block';
}
function linkToKinhPage(url, type, brand) {
    const param = type && brand ? `?type=${type}&brand=${brand}` : type ? `?type=${type}` : brand ? `?brand=${brand}` : '';
    location.href = `./${url}.html${param}`;
}