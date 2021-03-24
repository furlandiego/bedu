let registerFormData;

function init() {
    registerFormData = new RegisterFormData();
}

/* Método que es ejecutado cuando el usuario terminar de llenar el formulário y envia los datos
 */
function submitForm() {
    if (confirm("Estás seguro que deseas enviar los datos?")) {
        // sube a la sesión los datos registrados en el formulário
        sessionStorage.setItem("registerFormData", JSON.stringify(registerFormData));

        // redirecciona a la página de éxito
        window.location.href = "success.html?dataValidation=passed";
    }
}

/* Método que actualiza la barra de progreso
 */
function updateProgressBar(input) {
   
    // calcula el progreso en el llenado del formulário
    var currentProgress = calculateProgress();

    // actualiza la imagen de progreso basado en el porcentaje de avance de llenado del formulário
    document.getElementById("imgProgressBar").src = "img/" + String(currentProgress) + ".jpg";

    // Habilita el botón de submit si todo el formulário ya se haya llenado y el usuario haya aceptado las condiciones
    if (currentProgress == 100 && document.getElementById("accept").checked) {
        var btnSubmit = document.getElementById("btnSubmit");
        btnSubmit.style.background = "#4285F4";
        btnSubmit.style.pointerEvents = "visible";
        btnSubmit.style.cursor = "pointer";
    } else {
        // si no cumple, vuelve a deshabilitar el botón si en algún momento haya sido habilitado
        var btnSubmit = document.getElementById("btnSubmit");
        btnSubmit.style.background = "#FFFFFF";
        btnSubmit.style.pointerEvents = "none";
        btnSubmit.style.cursor = "default";
    }
}

/* Método que calcula el progreso de llenado del formulario
*/
function calculateProgress(){

    var currentProgress = 0;
    var inputs = document.getElementById("form").elements;
    
    // ejecuta la función que cuenta la cantidad de campos en el formulário
    var countFieldsLength = countFields(inputs);
    var increment = 100 / countFieldsLength;

    // Para cada elemento del formulário
    for (var i = 0; i < inputs.length; i++) {
        // Si es tipo input o select y no está vacio
        if ((inputs[i].type == "text" || inputs[i].type == "select-one") && inputs[i].value.trim().length > 0) {
            // valida si la entrada es válida y solo si es verdadero suma el progreso
            if (validateField(inputs[i]))
                currentProgress = currentProgress + increment;
            
            var inputID = inputs[i].getAttribute("id");
            var inputValue = inputs[i].value.trim();
        
            // popula el campo de entrada en la clase
            Reflect.set(registerFormData, inputID, inputValue);
        }
    }

    return currentProgress;
}

/* Método que cuenta el total de campos en el formulário */
function countFields(inputs) {
    var count = 0;
    
    // Para cada elemento del formulário cuenta si es input o select
    for (i = 0; i < inputs.length; i++) {
        // Si es tipo input o select
        if (inputs[i].type == "text" || inputs[i].type == "select-one") {
            count++;
        }
    }

    return count;
}

/* Método que valida si la entrada es válida */
function validateField(input) {
    var result = false;

    // busca el atributo que contiene el nombre de la regla parametrizada en el archivo json
    var validationAttribute = input.getAttribute("validationRule");

    var inputValue = input.value.trim();

    // busca el objeto que contiene la expresión regular de validación
    var validationObject = findValidationRule(validationAttribute);

    var validationRule = new RegExp(validationObject["validationRule"]);
    
    var msgValidationError = document.getElementById(validationObject["ErrorMessage"]);

    //valida si la entrada cumple con lo requerido
    result = validationRule.test(inputValue);

    // si la validación no es exitosa muestra el mensaje de error
    result ? msgValidationError.style.visibility = "hidden" : msgValidationError.style.visibility = "visible";
        
    return result;
}