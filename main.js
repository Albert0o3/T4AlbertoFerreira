// Función para el menú hamburguesa
function myFunction() {
    var x = document.getElementById("myNavbar");
    if (x.className === "navbar") {
        x.className += " responsive";
    } else {
        x.className = "navbar";
    }
}


//Funcion para las flechas de las imagenes gatunas

var indiceImagen = 1;
var indiceNombre = 1;

const gatos = ["Simba", "Nala", "Oliver", "Miguel", "Coco"]
let indiceGatoActual = 0;

const nombreGatoElement = document.getElementById("nombreGato");

const cambiarNombre = (cambio) => {
    indiceImagen += cambio;
    indiceGatoActual += cambio;

    var imagenes = ["./images/gato1.jpg", "./images/gato2.jpg", "./images/gato3.jpg", "./images/gato4.jpg", "./images/gato5.jpg"];

    // Asegurar que el índice está dentro del rango de gatos
    if (indiceGatoActual < 0) {
        indiceGatoActual = gatos.length - 1;
    } else if (indiceGatoActual >= gatos.length) {
        indiceGatoActual = 0;
    }

    if (indiceImagen < 1) {
        indiceImagen = imagenes.length;
    } else if (indiceImagen > imagenes.length) {
        indiceImagen = 1;
    }

    // Cambiar el nombre del gato en el elemento HTML
    nombreGatoElement.textContent = gatos[indiceGatoActual];

    // Obtener el elemento de la imagen y cambiar su fuente
    var imagen = document.getElementById("imagen");
    imagen.src = imagenes[indiceImagen - 1]
};
//Funcionamiento para cambiar e


//Funcion arrow => para el boton "borrar" del formulario

const borrarFormulario = () => {
    // Obtener el formulario por su ID
    const formulario = document.getElementById("miFormulario");

    // Restablecer el formulario
    formulario.reset();
};

//Alerta para el boton "enviar"
function enviar() {
    const nombreAnimal = document.getElementById("tipoGato").value;
    const nombrePersona = document.getElementById("nombre").value;

    alert("Gracias " + nombrePersona + " por adoptar a " + nombreAnimal + "!!");
}