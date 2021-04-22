// Aquí están los ejercicios de la primera sesión

//var time = 25;
//var greeting;

//if (time < 0 || time > 23) {
  //  greeting = "Hora desconocida";
//}
//else if (time < 12) {
//    greeting = "Good Morning";
//}
//else if (time < 20) {
//    greeting = "Good Afternoon";
//}
//else {
//    greeting = "Good Evening";
//}

//console.log(greeting);

// var day = 2;
// var text;

// switch (day){
//     case 0:
//         text = "Domingo";
//         break;
//     case 1:
//         text = "Lunes";
//         break;
//     case 2:
//         text = "Martes";
//         break;
//     case 3:
//         text = "Miércoles";
//         break;
//     case 4:
//         text = "Jueves";
//         break;
//     case 5:
//         text = "Viernes";
//         break;
//     case 6:
//         text = "Sábado";
//         break;
//     default:
//         text = "Error";
// }

// console.log(text);

//let speed = {};

// if (speed > 100) {
//     message = "Vas muy rápido";
// } else {
//     message = "Estás en el limite apropiado";
// }

// let message = speed  ? "vero" : "falso";

// console.log(speed);
// console.log(message);
/*for (let x = 2; x <= 100; x++){
    let contador = 0;
    for (let y = 1; y <= x; y++) {
        if (x % y == 0) {  
            contador++;
        }
        if (contador > 2) {
            break;
        }
    }
    if (contador == 2){
        console.log("Numero " + x);
    }
}*/

//Sesión 3 Funciones
/*function calculateAge(birthYear, birthMonth, birthDay) {
    let today = new Date();
    let age = today.getFullYear() - birthYear;

    if (!(today.getMonth()+1 >= birthMonth && today.getDate() >= birthDay))
        age--;

    return age;
}

const edadDiego = calculateAge(1982, 3, 25);

//console.log("Esta es mi edad: " + edadDiego);

function yearsUntilRetirement(year, month, day, name) {
    const age = calculateAge(year, month, day);
    const retirement = 65 - age;

    console.log(name + " retires in " + retirement + " years");
}

//yearsUntilRetirement(1982, 3, 25, "Diego");

function power(base, exponent) {
    var powerResult = 1;

    for (var i = 0; i < exponent; i++) {
        powerResult = powerResult * base;
    }

    console.log("La potencia de " + base + " elevado a " + exponent + " es " + powerResult);
}

//power(3, 4);

//const resultadoDeMultiplicacion = function (number) { return number * number};

//const square = resultadoDeMultiplicacion(5);

//console.log("resultado " + square);

/*(function (firstName, lastName) {
    console.log("Mi nombre es " + firstName + " y mi apellido es " + lastName);
})(0, 1);

function compareNumers(firstNumber, secondNumber) {
    if (firstNumber > secondNumber)
        console.log("El numero mayor es " + firstNumber);
    else if (secondNumber > firstNumber)
        console.log("El numero mayor es " + secondNumber);
    else if (firstNumber == secondNumber)
        console.log("Los numeros son iguales");
}

//compareNumers(3, 4);

function fibonacci(limit) {
    var firstNumber = 0, secondNumber = 1, result = 0, counter = 2;
    var numbers = [firstNumber, secondNumber];
    
    while (true) {

        result = firstNumber + secondNumber;
        numbers[counter] = result;
        firstNumber = secondNumber;
        secondNumber = result;
        counter++;

        if (numbers.length === limit)
            break;
    }

    console.log(numbers);

}

fibonacci(15);*/

// Clase 4 Objetos y Arreglos

/*let colores = ["Rojo", "Amarillo", "Azul"];

console.log(colores);

console.log("Posición 0 " + colores[0]);*/

/*let arregloInicial = [1, 3, 4, 7, 2, 1, 9, 0];

function multiplicacion(arregloInicial, multiplicador) {
    let arregloFinal = [];
    
    for (var i=0; i<arregloInicial.length;i++) {
        arregloFinal.push(arregloInicial[i] * multiplicador);
    }

    return arregloFinal;
}

//console.log(multiplicacion(arregloInicial, 2));

const edades = [25, 40, 35, 34, 26, 18, 17, 65, 69];

function promedioEdades(array) {
    let suma = 0;

    for (var i=0;i<array.length;i++) {
        suma+= array[i];
    }

    return suma / array.length;
}

//console.log("El promedio es : " + promedioEdades(edades));

let Juan = {
    nombre : "Juan",
    apellido : "Lopez",
    birthYear: 1969,
    fechaNacimiento: 15,
    calcularEdad: function() {
        let today = new Date();
        let year = today.getFullYear();

        return year - this.birthYear;
    }
};

console.log(Juan.calcularEdad());

let car = {
     brand : "Nissan",
     model : "Versa",
     year : 2021
};

function keyValuePairs(object) {
    let keys = Object.keys(object);
    let pares = [];

    for (let i=0;i<keys.length;i++) {
        pares.push([keys[i], object[keys[i]]]);
    }

    return pares;
}

//console.log(keyValuePairs(Juan));

function convertArrayIntoObject(array) {
    let objeto = {};

    for (var i=0;i<array.length;i++) {
        objeto[array[i][0]] = array[i][1];
    }
    
    return objeto;

}

//console.log(convertArrayIntoObject(keyValuePairs(car)));*/

// Clase 5 Programación Orientada a Objetos

/*let juan = {
    nombre : "Juan",
    birthYear: 1990,
    job: "Developer"
}*/

/*let Person = function(nombre, birthYear, job) {
    this.nombre = nombre;
    this.birthYear = birthYear;
    this.job = job;
}

let juan = new Person("Juanito", 1990, "Developer");

juan.nombre = "Juancho";
juan.birthYear = 2000;
juan.job = "Albañil";

console.log(juan);*/

/*let Vector = function(x, y) {

    this.x = x;
    this.y = y;
}

let vector1 = new Vector(3, 4);
let vector2 = new Vector(5, 2);

Vector.prototype.plus = function (vectorParam) {
    return new Vector(this.x + vectorParam.x, this.y + vectorParam.y);
};
Vector.prototype.minus = function (vectorParam) {   
    return new Vector(this.x - vectorParam.x, this.y - vectorParam.y);
};
Vector.prototype.length = function () {
    return Math.sqrt(this.x * this.x + this.y * this.y);
};


console.log(vector1.plus(vector2));
console.log(vector1.minus(vector2));
console.log(vector1.length());*/

/*let Person = function(name) {
    this.name = name;
}*/

//let juan = new Person("Juan");

/*let Developer = function(name, skills, yoe) {
    Person.call(this, name);
    
    this.skills = skills;
    this.yoe = yoe;
}

let juan = new Developer("Juan", "Javascript", 14);

console.log(juan);*/
/*
let Group = function() {

    this.members = [];
}

Group.prototype.has = function(value) {
    var result = false;

    for (var i=0;i<this.members.length;i++) {
        if (this.members[i] == value) {
            result = true;
            break;
        }
    }

    return result;
}

Group.prototype.add = function(value) {
    if (this.has(value) == false) {
        this.members.push(value);
    }
    return this.members;
}

Group.from = function(array) {
    let group = new Group();
    
    for (var i=0;i<array.length;i++) {
        group.add(array[i]);
    }

    return group;
}

let group = Group.from([1, 2, 3, 4, 4, 5, 7, 7]);

console.log(group); //Group members { members: [1, 2, 3, 4, 5]}
console.log(group.has(5));  //true
console.log(group.add(10)); //Group members { members: [1, 2, 3, 4, 5, 10]}

*/
// Clase 6 Programación Funcional

/*let numbers = [1, 2, 3, 4, 5];
let sumaCinco = numbers.map(function(element) {
    return element + 5;
});

let multiplicaPorDiez = numbers.map(element => element * 10);

console.log("SumaCinco es igual  a ", sumaCinco);
console.log("multiplicaPorDiez es igual a ", multiplicaPorDiez);*/

/*let car = { brand : "Nissan", year : 2005, model : "Sentra", color : "Negro"};

function addColor(car, colorParam) {
    let newCar = new Object();
    Object.assign(newCar, car, {color:colorParam});
    return newCar;
}

console.log("Carro antes ", car);
let carro = addColor(car, "Gris");
console.log("Carro después ", carro);*/

/*let cart = [
    {
        item : "Laptop",
        quantity : 1
    }
];

function addItemToCart(item, quantity) {
    
    let newCart = cart.map(function(element) {
        return element;
    });
    newCart.push({
        item : item,
        quantity : quantity
    });
    return newCart;
}

let carrito = addItemToCart("Phone", 2);
console.log(carrito);*/

/*let numbers = [1, 2, 3, 4, 5];
let doubles = numbers.map(function(number) {
    return number * 2;
});

function isEvenNumber(number) {
    return number % 2 === 0;
  }

let numerosPares = numbers.filter(element => element % 2 === 0);
let numerosImpares = numbers.filter(element => element % 2 !== 0);
let otrosPares = numbers.filter(isEvenNumber);

console.log(numbers);
console.log(doubles);
console.log(numerosPares);
console.log(numerosImpares);
console.log(otrosPares);*/

/*let number = 12345;

function sumaNumeros(number) {
    return number.toString().split("").map(n => parseInt(n)).reduce(function(acumulador, valorActual) {
        return acumulador + valorActual;
    }, 0);
}

console.log(number);
console.log("Suma " + sumaNumeros(number));*/

/*function flatten(arrays) {
    return arrays.reduce(function (acumulador, valorActual) {
        return acumulador.concat(valorActual);
    }, []);
}

let arrays = [[1, 2, 3], [4, 5, 6]];
let array = flatten(arrays);

console.log(array);*/

// Clase 7 Introducción al DOM

