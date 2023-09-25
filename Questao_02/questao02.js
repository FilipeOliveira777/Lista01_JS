//Arrow Function para realizar o calculo da potencia recebendo a base e o expoente.
const calcularpotencia=(base,expoente) => Math.pow(base,expoente);
//Pegando os elementos e definindo as constantes.
const btn= document.querySelector('button');
const base= document.querySelector('#base');
const expoente=document.querySelector('#expoente');
//Criando o evento de click no botão.
btn.addEventListener('click',()=>{
    const numb=Number(base.value);
    const nume=Number(expoente.value);
    const potencia=calcularpotencia(numb,nume);
    console.log(potencia);
    const div= document.querySelector('div');
//Exibindo o resultado da função para o usuario.    
    div.textContent=potencia;
})
