//Criando a função para gerar um numero aleatorio entre 1 e 100.
function gerarnumero(){
    return Math.floor(Math.random()*100)+1;
}
//Definindo as constantes e pegando os elementos.
const body = document.querySelector('body');
const btn = document.querySelector('button');
const ul=document.querySelector('ul');
//Criando o evento de Click no botao.
btn.addEventListener('click', () => {
    const num = gerarnumero();
    console.log(parseInt(num));
    const li=document.createElement('li');
    li.textContent= gerarnumero();
    ul.appendChild(li);
});