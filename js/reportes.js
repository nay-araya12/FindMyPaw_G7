document.getElementById("formReporte").addEventListener("submit", function(event) {
    event.preventDefault();

    let tipoReporte = document.getElementById("tipoReporte").value;
    let tamano = document.getElementById("tamano").value;
    let color = document.getElementById("color").value;
    let sexo = document.getElementById("sexo").value;
    let ubicacion = document.getElementById("ubicacion").value;
    let descripcion = document.getElementById("descripcion").value;

    if (
        tipoReporte === "" ||
        tamano === "" ||
        color === "" ||
        sexo === "" ||
        ubicacion === "" ||
        descripcion === ""
    ) {
        alert("Debe completar todos los campos obligatorios.");
    } else {
        alert("Reporte registrado correctamente.");
        document.getElementById("formReporte").reset();
    }
});