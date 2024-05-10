//short-circuit

//Falso
/**
 * false
 * 0
 * ''
 * null
 * undefined
 * NaN
 */

let nombre ='Gregorio';
let username = nombre || 'Anonimo';
console.log(username);

function f1(){
    console.log('funcion 1');
    return false;
};

function f2(){
    console.log('funcion 2');
    return true;
};

let x = f1() && f2();