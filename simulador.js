function calcularCotizacion() {
    const tipoSeguro = document.getElementById("tipoSeguro").value;
    const edad = parseInt(document.getElementById("edad").value);
    const cobertura = document.getElementById("cobertura").value;
    const extras = obtenerExtrasSeleccionados();

    let costoSeguroBase = 0;

    switch (tipoSeguro) {
        case "auto":
            costoSeguroBase = 500;
            break;
        case "hogar":
            costoSeguroBase = 700;
            break;
        case "vida":
            costoSeguroBase = 300;
            break;
        case "salud":
            costoSeguroBase = 600;
            break;
        case "viaje":
            costoSeguroBase = 200;
            break;
        case "celular":
            costoSeguroBase = 100;
            break;
        default:
            costoSeguroBase = 0;
            break;
    }

    let costoExtras = calcularCostoExtras(extras);

    if (edad < 25) {
        costoSeguroBase += costoSeguroBase * 0.2; 
    }

    switch (cobertura) {
        case "intermedia":
            costoSeguroBase += costoSeguroBase * 0.15; 
            break;
        case "completa":
            costoSeguroBase += costoSeguroBase * 0.3; 
            break;
        default:
            break;
    }

    const costoTotal = costoSeguroBase + costoExtras;

    document.getElementById("costoSeguro").textContent = `$${costoTotal.toFixed(2)}`;
}

function obtenerExtrasSeleccionados() {
    const extras = document.getElementsByName("extras");
    const extrasSeleccionados = [];

    for (const extra of extras) {
        if (extra.checked) {
            extrasSeleccionados.push(extra.value);
        }
    }

    return extrasSeleccionados;
}

function calcularCostoExtras(extras) {
    let costoExtras = 0;

    for (const extra of extras) {
        switch (extra) {
            case "robo":
                costoExtras += 50;
                break;
            case "danios":
                costoExtras += 80;
                break;
            case "grua":
                costoExtras += 30;
                break;
            default:
                break;
        }
    }

    return costoExtras;
}
