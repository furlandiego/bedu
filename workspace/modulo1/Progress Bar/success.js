function init() {
    
    let queryString = window.location.search;

    let urlParams = new URLSearchParams(queryString);
    let dataValidationFlag = urlParams.get("dataValidation");
    let transactionID = urlParams.get("transactionID");

    // si viene la bandera que el formulário fue validado por completo y el transactionID a 16 digitos
    if (dataValidationFlag === "passed" && transactionID.length == 16) {

        // obtiene de la sesión el objeto con los datos que han sido llenados en el formulário
        let registerFormData = JSON.parse(sessionStorage.getItem("registerFormData"));
       
        // obtiene los campos del formulário
        let inputs = document.getElementsByTagName("div");

        // para cada campo que se debe llenar en la pantalla
        Array.from(inputs).forEach(function(currentValue, currentIndex) {
            
            let inputID = currentValue.getAttribute("id");

            // si es un campo div que tiene el dato que corresponde al campo
            if (inputID != null && currentValue.tagName == "DIV") {
                // setea el valor del campo con el dato que viene en el objeto
                currentValue.innerHTML = currentValue.innerHTML + registerFormData[inputID];
            }
        });
    }
    else {
        // si la bandera no viene regresa el usuario a la pantalla del formulário
        window.location.href = "index.html";
    }
}