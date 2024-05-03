const gM = document.querySelector(".galeria-modal");
const iGM = document.querySelector(".galeria-modal imag");

function fecharGaleria() {
  gM.style.visibility = "hidden";
}

function abrirGaleria(src) {
    gM.style.visibility = "visible"
    iGM.transform = "scale(1)"
    iGM.src = src
}
