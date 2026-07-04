const formulario = document.getElementById("formReporte");
const imagen = document.getElementById("imagen");
const vistaPrevia = document.getElementById("vistaPrevia");
const eliminarImagen = document.getElementById("eliminarImagen");

imagen.addEventListener("change", function(){

    const archivo = imagen.files[0];

    if(archivo){

        const lector = new FileReader();

        lector.onload = function(event){
            vistaPrevia.src = event.target.result;
            vistaPrevia.style.display = "block";
            eliminarImagen.style.display = "inline-block";

        }
        lector.readAsDataURL(archivo);

    }

});

eliminarImagen.addEventListener("click", function(){

    imagen.value = "";
    vistaPrevia.src = "";
    vistaPrevia.style.display = "none";
    eliminarImagen.style.display = "none";

});

formulario.addEventListener("submit", function(event){

    event.preventDefault();

    let tipoReporte =
    document.getElementById("tipoReporte").value;

    let tamano =
    document.getElementById("tamano").value;

    let color =
    document.getElementById("color").value;

    let sexo =
    document.getElementById("sexo").value;

    let ubicacion =
    document.getElementById("ubicacion").value;

    let descripcion =
    document.getElementById("descripcion").value;

    if(
        tipoReporte === "" ||
        tamano === "" ||
        color === "" ||
        sexo === "" ||
        ubicacion === "" ||
        descripcion === ""
    ){

        alert("Debe completar todos los campos obligatorios.");

    }

    else{

        alert("Reporte registrado correctamente.");

        formulario.reset();
        vistaPrevia.style.display = "none";
        eliminarImagen.style.display = "none";

    }

});