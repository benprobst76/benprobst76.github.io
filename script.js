window.onscroll = function(){
    var header = document.getElementsByTagName("header");
    if (window.scrollY > 50){
        header.classList.add("sticky");
    } else {
        header.classList.remove("sitcky");
    }
};