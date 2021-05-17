const nextButton = document.querySelector(".next-button")
const prevButton = document.querySelector(".prev-button")
const timeline = document.querySelector(".timeline")
const containers = document.querySelectorAll(".container")
const header = document.querySelector("header")
const span = document.querySelector('#span')
const btnMenu = document.querySelector('#menuBtn')
const next = document.querySelector('#next')
const prev = document.querySelector('#prev')
const cards = document.querySelector('.cards')
const verMais = document.querySelector('#verMais')
const contentVerMais = document.querySelector('.right-features')

let activeCircle = positionTimeline = 0

function clearContainers() {
    containers.forEach(element => {
        element.classList.remove("active")
    });
}

window.onscroll = () => {
    if(window.scrollY != 0){
        header.classList.add("active")
        span.classList.add('active')
    } else {
        header.classList.remove("active")
        span.classList.remove('active')
    }
    header.classList.remove('open')
}

prevButton.onclick = () => {
    if(activeCircle > 0){
        positionTimeline = positionTimeline - 534
        activeCircle--
        timeline.style.transform = "rotate(-90deg) translateY(calc(50% - " + positionTimeline+ "px))"
        clearContainers()
        containers[activeCircle].classList.add("active")
        if(activeCircle == 0){
            prevButton.style.transform = "translateX(-200px) translateY(-50%)"
        } else{
            nextButton.style.transform = "translateX(0) translateY(-50%)"
        }
    }
}
nextButton.onclick = () => {
    if(activeCircle < containers.length - 1){
        positionTimeline = positionTimeline + 534
        activeCircle++
        timeline.style.transform = "rotate(-90deg) translateY(calc(50% - " + positionTimeline+ "px))"
        clearContainers()
        containers[activeCircle].classList.add("active")
        if(activeCircle == containers.length - 1){
            nextButton.style.transform = "translateX(200px) translateY(-50%)"
        } else{
            prevButton.style.transform = "translateX(0) translateY(-50%)"
        }
    }
}

btnMenu.addEventListener('click', () => {
    header.classList.toggle('open')
    header.classList.add('active')
})
next.addEventListener('click', () => {
    if (cards.classList.contains('first')) {
        cards.classList.remove('first')
        cards.classList.add('second')
    } else if (cards.classList.contains('second')) {
        cards.classList.remove('second')
        cards.classList.add('third')
    } else {
    }
})
prev.addEventListener('click', () => {
    if (cards.classList.contains('first')) {

    } else if (cards.classList.contains('second')) {
        cards.classList.remove('second')
        cards.classList.add('first')

    } else {
        cards.classList.remove('third')
        cards.classList.add('second')
    }
})