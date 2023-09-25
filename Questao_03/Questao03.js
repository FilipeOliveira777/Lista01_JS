//Função para calcular o meelhor combustivel no momento, recebendo o valor do álcool e da gasolina.
function CalcularMelhorCombustivel(alcool,gasolina){
    const precofinal=alcool/gasolina;
    
    if(precofinal<0.7){
        return 1;
    }
    else{
        return 0;
    }
}
//Definindo as constantes e selecionando o elemento
const btn=document.querySelector('button');
const gasolina=document.querySelector('#gasolina');
const alcool=document.querySelector('#alcool');
const b=document.querySelector('b');
//Criando o evento de clik no botão.
btn.addEventListener('click', ()=>{
const valorgasolina=Number(gasolina.value);
const valoralcool=Number(alcool.value);    
const melhorvalor=CalcularMelhorCombustivel(valoralcool,valorgasolina);
console.log(melhorvalor);
//verificando o resultado da função e exibindo-o para o usuario.
if(melhorvalor==0){
    b.textContent='Gasolina é o melhor combustível para abastecer no momento';
}
else{
    b.textContent='Álcool é o melhor  combustível para abastecer no momento';
}

})