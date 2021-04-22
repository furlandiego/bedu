let validationRules = {
    "nameValidationRule": {
        "validationRule" : "\\w{2}",
        "ErrorMessage" : "msgValidationErrorName"
    },
    "lastNameValidationRule": {
        "validationRule" : "\\w{2}",
        "ErrorMessage" : "msgValidationErrorLastName"
    },
    "emailValidationRule" : {
        "validationRule" : "^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$",
        "ErrorMessage" : "msgValidationErrorEmail"
    },
    "phoneValidationRule": {   
        "validationRule" : "\\d{10}",
        "ErrorMessage" : "msgValidationErrorPhone"
    },
    "addressValidationRule" : {
        "validationRule" : "\\w{2}",
        "ErrorMessage" : "msgValidationErrorAddress"
    },
    "addressNumberValidationRule" : {   
        "validationRule" : "\\d{1}",
        "ErrorMessage" : "msgValidationErrorAddressNumber"
    },
    "neighborhoodValidationRule" : {   
        "validationRule" : "\\w{2}",
        "ErrorMessage" : "msgValidationErrorNeighborhood"
    },
    "postalCodeValidationRule" : {   
        "validationRule" : "\\d{5}",
        "ErrorMessage" : "msgValidationErrorPostalCode"
    },
    "cityNameValidationRule" : {   
        "validationRule" : "\\w{4}",
        "ErrorMessage" : "msgValidationErrorCity"
    },
    "stateValidationRule" : {    
        "validationRule" : "\\w{1}",
        "ErrorMessage" : "msgValidationErrorState"
    }
};

/* Método que regresa el objeto basado en el nombre de la regla 
*/
function findValidationRule (key) {
    return validationRules[key];
}
