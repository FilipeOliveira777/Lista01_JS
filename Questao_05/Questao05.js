/*Crie um projeto com apenas um botão com rótulo “Simular”.
Esse botão deve estar associado a um evento que vai realizar 
uma simulação de um rolamento de dados comuns (com valores de 1 a 6) 1 milhão de vezes. 
Ao final, deve mostrar na tela quantas vezes cada um dos números apareceu na simulação. 
Use o método Math.random() pra gerar esse número entre 1 e 6, fazendo o arredondamento quando necessário.*/
function gerarnumeros(min,max){
    const numerosgerados= Math.floor(Math.random() * (max - min + 1)) + min
    return numerosgerados;
}
const divnum1=document.querySelector('#numero1');
const divnum2=document.querySelector('#numero2');
const divnum3=document.querySelector('#numero3');
const divnum4=document.querySelector('#numero4');
const divnum5=document.querySelector('#numero5');
const divnum6=document.querySelector('#numero6');
const btn=document.querySelector('button');
btn.addEventListener('click', () =>{
    let cont=1;
    let numeros1=0;
    let numeros2=0;
    let numeros3=0;
    let numeros4=0;
    let numeros5=0;
    let numeros6=0;
    while(cont<=1000000){
        const min = 1;
        const max = 6;
        const numerosaleatorios=gerarnumeros(min,max);
        switch (numerosaleatorios) {
            case 1:
                numeros1++;
                break;
            case 2:
                numeros2++;
                break;
            case 3:
                numeros3++;
                break;
            case 4:
                numeros4++;
                break;
            case 5:
                numeros5++;
                break;
            case 6:
                numeros6++;
                break;
        }
        cont++;
    }
    divnum1.textContent='O numero 1 apareceu: '+numeros1+ ' vezes';
    divnum2.textContent='O numero 2 apareceu: '+numeros2+ ' vezes';
    divnum3.textContent='O numero 3 apareceu: '+numeros3+ ' vezes';
    divnum4.textContent='O numero 4 apareceu: '+numeros4+ ' vezes' ;
    divnum5.textContent='O numero 5 apareceu: '+numeros5+ ' vezes';
    divnum6.textContent='O numero 6 apareceu: '+numeros6+ ' vezes';
});