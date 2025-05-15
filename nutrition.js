let next = document.querySelector('.next')
let prev = document.querySelector('.prev')
let items = document.querySelectorAll('.item')
let currentItem = 0

setInterval(function() {
    next.click() 
}, 10000)
next.addEventListener('click', function(){
    let items = document.querySelectorAll('.item')
    document.querySelector('.slide').appendChild(items[0])
})

prev.addEventListener('click', function(){
    let items = document.querySelectorAll('.item')
    document.querySelector('.slide').prepend(items[items.length - 1])
})




let navbar = document.querySelector('.header .navbar');
let menu = document.querySelector('#menu');

menu.onclick = () => {
    menu. classList.toggle('fa-bars');
    navbar.classList.toggle('active')
};
window.onscroll = () => {
    menu. classList.remove('fa-bars');
    navbar.classList.remove('active')
}



const counterEl = document.querySelector('.affiliate');
const counterSt = document.querySelector('.stars');
const counterAg = document.querySelector('.agents');
const counterCl = document.querySelector('.clients');
let counterNumber = 0;

const updateCounter = setInterval(function() {
    counterNumber++;
    counterEl.textContent = counterNumber;

    if (counterNumber >= 100) {
        clearInterval(updateCounter);
        counterEl.style.color = 'white';
    }
},800)
const updateCounte = setInterval(function() {
    counterNumber++;
    counterSt.textContent = counterNumber;

    if (counterNumber >= 34) {
        clearInterval(updateCounte);
        counterSt.style.color = 'white';
    }
},800)
const updateCount = setInterval(function() {
    counterNumber++;
    counterAg.textContent = counterNumber;

    if (counterNumber >= 600) {
        clearInterval(updateCount);
        counterAg.style.color = 'white';
    }
},10)
const updateCounc = setInterval(function() {
    counterNumber++;
    counterCl.textContent = counterNumber;

    if (counterNumber >= 60) {
        clearInterval(updateCounc);
        counterCl.style.color = 'white';
    }
},800)

