const productos = [
    { tipo: "auto", precio: 1000 },
    { tipo: "hogar", precio: 500 },
    { tipo: "vida", precio: 300 }
];

function calcularCotizacion() {
    const tipoSeguro = document.getElementById("tipoSeguro").value;
    const edad = parseInt(document.getElementById("edad").value);

    const productoEncontrado = productos.find(producto => producto.tipo === tipoSeguro);

    if (productoEncontrado) {
        let costoSeguro = productoEncontrado.precio;

        if (edad < 25 && tipoSeguro === "auto") {
            costoSeguro += 200;
        }

        console.log(`El costo del seguro es: $${costoSeguro}`);
        document.getElementById("costoSeguro").textContent = `$${costoSeguro}`;
    } else {
        alert("Tipo de seguro no válido.");
    }
}
