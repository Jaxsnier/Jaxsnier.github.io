window.onscroll = function(){
    var multiplicador_parallax = 0.2;

    var posicion = window.pageYOffset || document.documentElement.scrollTop;
    var img_header = document.getElementById("img-header");

    img_header.style.bottom = posicion * multiplicador_parallax + "px"
}