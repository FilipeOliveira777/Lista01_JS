function gerarnumero(){
    return Math.floor(Math.random()*100)+1;
}
const body = document.querySelector('body');
const btn = document.querySelector('button');
const ul=document.querySelector('ul');
btn.addEventListener('click', () => {
    const num = gerarnumero();
    console.log(parseInt(num));
    const li=document.createElement('li');
    li.textContent= gerarnumero();
    ul.appendChild(li);

});