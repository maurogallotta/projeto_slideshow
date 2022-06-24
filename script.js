let totalSlides = document.querySelectorAll('.slider--item').length;
let currentSlide = 0;

/*// PARA UM SLIDE DE MENOR TAMANHO (modigficar css e aqui) tirar o outro código
let sliderWidth = document.querySelector('.slider').clientWidth;
document.querySelector('.slider--width').style.width = 
    `${sliderWidth * totalSlides}px`;
document.querySelector('.slider--controls').style.width = 
    `${sliderWidth}px`;
    */

// Para adapta a lergura completa
document.querySelector('.slider--width').style.width = 
    `calc(100vw * ${totalSlides})`;

document.querySelector('.slider--controls').style.height = 
`${document.querySelector('.slider').clientHeight}px`;
// fim da largura completa

function goPrev() {
    currentSlide--;
    if (currentSlide < 0) {
        currentSlide = totalSlides - 1;
    }
    updateMargin();
}
function goNext() {
    currentSlide++;
    if(currentSlide > (totalSlides-1)){
        currentSlide = 0;
    }
    updateMargin();
}

function updateMargin() {
    let sliderItemWidth = document.querySelector('.slider--item').clientWidth;
    let newMargin = (currentSlide * sliderItemWidth);
    document.querySelector('.slider--width').style.marginLeft = 
        `-${newMargin}px`;
}

// cria um intervalo de 5000 milisegundos antes de avançar na proxima slide
setInterval(goNext, 5000)