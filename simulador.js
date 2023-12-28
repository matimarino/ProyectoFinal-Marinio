async function calcularCotizacion() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
        const data = await response.json();

        const { userId, title, completed } = data;

        let costoSeguroBase = obtenerCostoBase(document.getElementById("tipoSeguro").value);

        let costoExtras = calcularCostoExtras(["robo", "danios", "grua"]);

        if (edad < 25) {
            costoSeguroBase += costoSeguroBase * 0.2;
        }

        switch (document.getElementById("cobertura").value) {
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

        localStorage.setItem('userId', userId);
        localStorage.setItem('title', title);
        localStorage.setItem('completed', completed);

        Swal.fire('¡Cálculo exitoso!', 'La cotización se ha calculado correctamente.', 'success');

    } catch (error) {
        console.error('Error al obtener datos:', error);
        Swal.fire('Error', 'Hubo un problema al obtener los datos. Por favor, inténtalo de nuevo.', 'error');
    }
}

function obtenerCostoBase(tipoSeguro) {
    switch (tipoSeguro) {
        case "auto":
            return 500;
        case "hogar":
            return 700;
        case "vida":
            return 300;
        case "salud":
            return 600;
        case "viaje":
            return 200;
        case "celular":
            return 100;
        default:
            return 0;
    }
}

function calcularCostoExtras(extras) {
    const costoPorExtra = {
        robo: 50,
        danios: 80,
        grua: 30
    };

    let costoExtras = 0;

    for (const extra of extras) {
        costoExtras += costoPorExtra[extra] || 0;
    }

    return costoExtras;
}

document.getElementById("calcularBtn").addEventListener("click", async () => {
    if (validarFormulario()) {
        await calcularCotizacion();
    } else {
        alert('Por favor, ingresa una edad válida.');
    }
});

const validarFormulario = () => {
    const edad = parseInt(document.getElementById("edad").value);
    return !isNaN(edad) && edad > 0;
};

calcularCotizacion();
