/*
CONSIGNA
crea una funcion que reciba dos parametros 
y un tercer parametro correspondiente al operador aritmetico.
La funcion debe retornar el resultado de la operacion entre estos dos numeros.
crea una segunda funcion que utilize un prompt y pida dos numeros
luego crea un tercer prompt pidiendo el operador aritmetico
Esta debe constatar q los 2 primeros valores sean numeros
y el tercero sea un simbolo aritmetico
si esta todo ok debera llamar a la primera funcion pasandoles los parametros y retornando el resultado de la operacion
*/
let operador = '';

let suma = function(numA, numB){
    return numA + numB
};
let resta = function(numA, numB){
    return numA - numB
};
let multiplicacion = function(numA, numB){
    return numA * numB
};
let division = function(numA, numB){
    return numA / numB
};


let calculadora = function (numA, numB) {
    numA = parseInt(prompt('Dame un numero'));
    numB = parseInt(prompt('Dame otro numero'));    
    operador = prompt('dime que operacion quieres hacer; suma(+), resta(-), multiplicacion(*) o division(/)');
    
    switch (operador) {
        case '+' || 'mas':
            return console.log(suma);
        case '-' || 'resta':
            return console.log(resta);
        case '*' || 'multiplicacion':
            return console.log(multiplicacion);
        case '/' || 'division':
            return console.log(division);
        default:
            return 'error 2';
    }
};


calculadora();



