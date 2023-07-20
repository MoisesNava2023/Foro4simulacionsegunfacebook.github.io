$(document).ready(function() {
    var logueado = false;

    $("#Ingresar").click(function() {
        if ($("#usuario").val() === "moises@gmail.com" && $("#contraseña").val() === "moises1") {
            logueado = true;
            if (logueado) {
                Swal.fire("Usuario Verificado").then(function() {
                    window.location.href = "PARTE 2/index2.html";
                });
            }
        } else {
            Swal.fire("Usuario no Verificado");
        }
    });
});