const backgroundBlock = document.querySelector('.backgroundBlock')
const img = document.querySelector('img')
const nav = document.querySelector('.nav')

background()

function background() {
    backgroundBlock.style.height = innerHeight + 'px'
    img.style.width = innerWidth + 'px'
    nav.style.height = innerHeight + 'px'
}    
