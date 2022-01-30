function kubekKlik(evt) {
    let poziom = Number(this.getAttribute('poziom'));
    poziom+=10;
    console.log(poziom);
    if (poziom <= 100){
        this.style.backgroundPosition = "0 " + poziom +  "%";
        this.setAttribute('poziom', poziom);
    } else {
        this.style.cursor = "not-allowed";
    }

}
function butelkaKlik(evt) {
    let poziom1 = Number(this.getAttribute('poziom1'));
    poziom1+=5;
    console.log(poziom1);
    if (poziom1 <= 100){
        this.style.backgroundPosition = "0 " + poziom1 +  "%";
        this.setAttribute('poziom1', poziom1); /* ustawia atrybut w " " na wartość po , */
    } else {
        this.style.cursor = "not-allowed";
    }

}


let kubki = document.querySelectorAll('.kubek');
let butelki = document.querySelectorAll('.butelka');


kubki.forEach( kubek =>  {
    kubek.addEventListener('click', kubekKlik);
})
butelki.forEach( butelka =>  {
    butelka.addEventListener('click', butelkaKlik);
})