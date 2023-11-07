
function calcularCotizacion() {
    const tipoSeguro = document.getElementById("tipoSeguro").value;
    const edad = parseInt(document.getElementById("edad").value);

    let costoSeguro = 0;

    if (tipoSeguro === "auto") {
        if (edad < 25) {
            costoSeguro = 1000;
        } else {
            costoSeguro = 800;
        }
    } else if (tipoSeguro === "hogar") {
        costoSeguro = 500;
    } else if (tipoSeguro === "vida") {
        costoSeguro = 300;
    }

    document.getElementById("costoSeguro").textContent = costoSeguro;
}
