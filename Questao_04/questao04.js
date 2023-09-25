//Criando a função para converter o valor em celcius para fahrenheit.
function converterFahrenheit(celcius) {
    const celciuspfahrenheit = (celcius * 9/5)+32;
    return celciuspfahrenheit;
}
//Criando a função para converter o valor em celcius para kelvin.
function converterKelvin(celcius) {
    const celciuspkelvin = celcius + 273.15;
    return celciuspkelvin;
}
//Definindo as constantes e pegando os elementos.
const celcius = document.querySelector('#celcius');
const spankelvin = document.querySelector('#temp-kelvin');
const spanfahrenheit = document.querySelector('#temp-fahrenheit');
//Criando o evento Keyup no campo de texto (input).
celcius.addEventListener('keyup', (e) => {
        const celciusstring = celcius.value;
        const celsiusnum = parseFloat(celciusstring);
 //Verificando se a tecla presionada pelo usuario é um valor valido ou não e exibindo o resultado.       
    if (!isNaN(celsiusnum)){
        const fahrenheit=converterFahrenheit(celsiusnum);
        const kelvin=converterKelvin(celsiusnum);
        spanfahrenheit.textContent ='O valor da temperatura em Fahrenheit é:  ' +fahrenheit;
        spankelvin.textContent ='O valor em Kelvin é:  '+kelvin;
    }
    else{
        spanfahrenheit.textContent='"-"';
        spankelvin.textContent='Digite um novo valor válido';
    }
})

