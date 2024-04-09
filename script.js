function nada(header){
    header.style.display = "none"
}
function subir() {
    var header = document.getElementById("header");
    header.style.transform = "translateY(-110%)";
    setTimeout(()=>{
        nada(header)
    }, 900)
}