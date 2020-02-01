//ASPAS SIMPLES
var string = "myString" || 'myString';

var number = 9000;
var booleans = true || false;

// boa prática, NÃO USAR new Array();
var array = [1,2,3,4,5,'dssdsd',[true, false]];

console.log(array.length);
array.push(100);
console.log(array.length);

function dispararLaser(){
    console.log('BEAM');

    var tiro = Math.random();

    if(tiro > 0.50){
        console.log('acertou');
        return 'acertou';
    } else {
        console.log('errou');
        return 'errou';
    }
}

console.log(dispararLaser());

var acertouOuErrou = dispararLaser();

console.log(`${acertouOuErrou} - fora da função`);
console.log('fora da funcao', acertouOuErrou);

var heroi = {
    nome:'Tony Stark',
    alterEgo: 'Homem de Ferro',
    dispararLaser: dispararLaser
}
