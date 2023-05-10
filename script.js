window.onscroll = function(){
    var multiplicador_parallax = 0.2;
    var devtext = document.getElementById("devtoolstext")

    var posicion = window.pageYOffset || document.documentElement.scrollTop;
    var img_header = document.getElementById("img-header");

    var img_section_uno = document.getElementById("img-section-uno");
    var img_section_dos = document.getElementById("img-section-dos");
    //var img_section_uno = document.getElementById("img-section-tres");
    //var img_section_uno = document.getElementById("img-section-cuatro");
    //var img_section_uno = document.getElementById("img-section-cinco");
    //var img_section_uno = document.getElementById("img-section-seis");

    img_header.style.bottom = posicion * multiplicador_parallax + "px"

    img_section_uno.style.bottom = posicion * multiplicador_parallax + "px"
    img_section_dos.style.bottom = (posicion * multiplicador_parallax + "px")
    //img_section_tres.style.bottom = posicion * multiplicador_parallax + "px"
    //img_section_cuatro.style.bottom = posicion * multiplicador_parallax + "px"
    //img_section_cinco.style.bottom = posicion * multiplicador_parallax + "px"
    //img_section_seis.style.bottom = posicion * multiplicador_parallax + "px"


    //Developer tools
    devtext.value = 
        "window.pageYOffset =" + parseInt( window.pageYOffset) + 
        "\nScroll Top = " + parseInt( document.documentElement.scrollTop)+
        "\nsection 1 img Pos = " + parseInt( img_section_dos.style.bottom)+
        "\nsection 2 img Pos = " + parseInt( img_section_dos.style.bottom)
        ;
    

}