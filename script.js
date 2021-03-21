const itemService = document.querySelectorAll('.itemService')
const model = document.querySelectorAll('.model')
const typeServicesBlock = document.querySelector('.typeServicesBlock')
const partnersBlock = document.querySelector('.partnersBlock')
const maps = document.querySelector('.maps')
const contactUs = document.querySelector('.contactUs')

function logoFun() {
    document.querySelector('.logo').style.opacity = 1
    document.querySelector('.logo').style.transition = '2s'
    typeServicesBlock.style.height = innerHeight + 'px'
    partnersBlock.style.height = innerHeight + 'px'
    maps.style.height = innerHeight + 'px'
    contactUs.style.height = innerHeight + 'px'

}
logoFun()

function partnersFun() {
    partnersBlock.style.right = '0px'
    partnersBlock.style.transition = '.5s'
}

function servicesFun() {
    typeServicesBlock.style.opacity = '1'
    typeServicesBlock.style.transition = '.4s'
}

window.addEventListener('scroll', () => {
    console.log(window.pageYOffset)
    if (window.pageYOffset > 350) {
        servicesFun()
    } else {
        typeServicesBlock.style.opacity = '0'
    }
    if (window.pageYOffset > 700) {
        partnersFun()
    } else {
        partnersBlock.style.right = '5000px'
    }
})

itemService[0].addEventListener('mouseover', () => {
    model[0].style.opacity = '.5'
    model[0].style.top = '520px'
    model[0].style.zIndex = '1'
})
itemService[0].addEventListener('mouseout', () => {
    model[0].style.opacity = '0'
    model[0].style.top = '500px'
    model[0].style.zIndex = '-1'
})
itemService[1].addEventListener('mouseover', () => {
    model[1].style.opacity = '.5'
    model[1].style.top = '520px'
    model[1].style.zIndex = '1'
})
itemService[1].addEventListener('mouseout', () => {
    model[1].style.opacity = '0'
    model[1].style.top = '500px'
    model[1].style.zIndex = '-1'
})
itemService[2].addEventListener('mouseover', () => {
    model[2].style.opacity = '.5'
    model[2].style.top = '520px'
    model[2].style.zIndex = '1'
})
itemService[2].addEventListener('mouseout', () => {
    model[2].style.opacity = '0'
    model[2].style.top = '500px'
    model[2].style.zIndex = '-1'
})
itemService[3].addEventListener('mouseover', () => {
    model[3].style.opacity = '.5'
    model[3].style.top = '520px'
    model[3].style.zIndex = '1'
})
itemService[3].addEventListener('mouseout', () => {
    model[3].style.opacity = '0'
    model[3].style.top = '500px'
    model[3].style.zIndex = '-1'
})
itemService[4].addEventListener('mouseover', () => {
    model[4].style.opacity = '.5'
    model[4].style.top = '520px'
    model[4].style.zIndex = '1'
})
itemService[4].addEventListener('mouseout', () => {
    model[4].style.opacity = '0'
    model[4].style.top = '500px'
    model[4].style.zIndex = '-1'
})
itemService[5].addEventListener('mouseover', () => {
    model[5].style.opacity = '.5'
    model[5].style.top = '520px'
    model[5].style.zIndex = '1'
})
itemService[5].addEventListener('mouseout', () => {
    model[5].style.opacity = '0'
    model[5].style.top = '500px'
    model[5].style.zIndex = '-1'
})
itemService[6].addEventListener('mouseover', () => {
    model[6].style.opacity = '.5'
    model[6].style.top = '520px'
    model[6].style.zIndex = '1'
})
itemService[6].addEventListener('mouseout', () => {
    model[6].style.opacity = '0'
    model[6].style.top = '500px'
    model[6].style.zIndex = '-1'
})
itemService[7].addEventListener('mouseover', () => {
    model[7].style.opacity = '.5'
    model[7].style.top = '520px'
    model[7].style.zIndex = '1'
})
itemService[7].addEventListener('mouseout', () => {
    model[7].style.opacity = '0'
    model[7].style.top = '500px'
    model[7].style.zIndex = '-1'
})
itemService[8].addEventListener('mouseover', () => {
    model[8].style.opacity = '.5'
    model[8].style.top = '520px'
    model[8].style.zIndex = '1'
})
itemService[8].addEventListener('mouseout', () => {
    model[8].style.opacity = '0'
    model[8].style.top = '500px'
    model[8].style.zIndex = '-1'
})

