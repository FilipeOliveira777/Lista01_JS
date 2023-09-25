const calcularpotencia=(base,expoente) => Math.pow(base,expoente);
const btn= document.querySelector('button');
const base= document.querySelector('#base');
const expoente=document.querySelector('#expoente');
btn.addEventListener('click',()=>{
    const numb=Number(base.value);
    const nume=Number(expoente.value);
    const potencia=calcularpotencia(numb,nume);
    console.log(potencia);
    const div= document.querySelector('div');
    div.textContent=potencia;
})
