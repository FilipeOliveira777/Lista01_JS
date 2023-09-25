function converterFahrenheit(celcius) {
    const celciuspfahrenheit = (celcius * 9/5)+32;
    return celciuspfahrenheit;
}
function converterKelvin(celcius) {
    const celciuspkelvin = celcius + 273.15;
    return celciuspkelvin;
}
const celcius = document.querySelector('#celcius');
const spankelvin = document.querySelector('#temp-kelvin');
const spanfahrenheit = document.querySelector('#temp-fahrenheit');
celcius.addEventListener('keyup', (e) => {
        const celciusstring = celcius.value;
        const celsiusnum = parseFloat(celciusstring);
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

