

let temaColor = document.getElementById("tema");

temaColor.addEventListener("click", cambiarTema())


function cambiarTema() {
    let heade = document.getElementById("cabecera");
    console.log("se cambio de color");
    /* body.styles.backgroundColor = "var(--color-de-fondo-oscuro)" */
    heade.style.color = "white";
}