function init() {
    
var queryString = window.location.search;

    var urlParams = new URLSearchParams(queryString);
    var dataValidationFlag = urlParams.get("dataValidation");

    // si viene la bandera que el formulário fue validado por completo y exitosamente 
    if (dataValidationFlag === "passed") {

        // obtiene de la sesión el objeto con los datos llenado en el formulário
        var registerFormData = JSON.parse(sessionStorage.getItem("registerFormData"));
       
        // obtiene los campos del formulário
        var inputs = document.getElementsByTagName("div");

        for (var i=0;i<inputs.length;i++) {
            var inputID = inputs[i].getAttribute("id");

            // si es un campo div que tiene el dato que corresponde al campo
            if (inputID != null && inputs[i].tagName == "DIV") {
                // setea el valor del campo con el dato que viene en el objeto
                inputs[i].innerHTML = inputs[i].innerHTML + registerFormData[inputID];
            }
        }
    }
    else {
        // si la bandera no viene regresa el usuario a la pantalla del formulário
        window.location.href = "index.html";
    }
}