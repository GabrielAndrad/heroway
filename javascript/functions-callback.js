function laser1(){
    console.log('beam');
}

const laser2 = function() {
    console.log('beam');
}

const laser3 = () => {
    console.log('beam');
}

console.log(laser1());

//-------------------------

function executador(fn){
    console.log('executador está executando');
    fn();
}
function pegarNumero10(){
    console.log('10');
    return 10;
}

debugger;

executador(pegarNumero10);

const number = [1,2,3,4,5,6,,7,8,9];

function filter(array,fn){
    for(let index =0;index<array.lenght;index++){
        const element = array[index];
        const shouldFilter = fn(element);

        if(shouldFilter === true){
            
        }
    }
}

function callback(number){
    if(number > 5) {
        return true;
    } else {
        return false;
    }
}