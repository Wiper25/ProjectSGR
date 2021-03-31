const obj = {
    wrapper: document.querySelector('.wrapper'),
    content: document.querySelector('.content'),
    btnMenu: document.querySelector('.btnMenu'),
    menuBlock: document.querySelector('.menuBlock'),
    itemBlock: document.querySelectorAll('.item'),
    btn: document.querySelectorAll('.btn'),
    imgIcon: document.querySelectorAll('.imgIcon'),
    logo: document.querySelector('.logo'),
    welcome: document.querySelector('.welcome'),
    question: document.querySelectorAll('.question ul li'),
    textDescription: document.querySelectorAll('.textDescription'),
}

obj.wrapper.style.height = innerHeight + 'px'
obj.content.style.height = innerHeight - 100 + 'px'

function startDOM() {
    setTimeout(() => {
        obj.logo.style.opacity = '1'
    }, 1000);
    setTimeout(() => {
        obj.btnMenu.style.opacity = '1'
    }, 2000);
}
startDOM()

function funBtnMenu() {
    obj.btnMenu.classList.toggle("change")
    if (obj.btnMenu.classList.contains("change")) {
        obj.btnMenu.classList.add("change");
        obj.menuBlock.style.width = '200px'
        obj.menuBlock.style.height = '200px'
        obj.menuBlock.style.opacity = '1'
        obj.menuBlock.style.zIndex = '10'
    } else {
        obj.menuBlock.style.width = '200px'
        obj.menuBlock.style.height = '0px'
        obj.menuBlock.style.opacity = '0'
        obj.menuBlock.style.zIndex = '-10'
    }
}

obj.btn[0].addEventListener('click', () => {
    obj.content.scrollTop = 120
})
obj.btn[1].addEventListener('click', () => {
    obj.content.scrollTop = 670
})
obj.btn[2].addEventListener('click', () => {
    obj.content.scrollTop = 1220
})
obj.btn[3].addEventListener('click', () => {
    obj.content.scrollTop = 1770
})
obj.btn[4].addEventListener('click', () => {
    obj.content.scrollTop = 2320
})

obj.content.addEventListener('scroll', function () {
    console.log(obj.content.scrollTop)
    if (obj.content.scrollTop > 60) {
        obj.imgIcon[0].style.opacity = '1'
        obj.menuBlock.style.width = '200px'
        obj.menuBlock.style.height = '0px'
        obj.menuBlock.style.opacity = '0'
        obj.menuBlock.style.zIndex = '-10'
        obj.btnMenu.classList.remove("change");
    }
    // if (obj.content.scrollTop > 500) {
    //     obj.imgIcon[0].style.opacity = '0'
    //     obj.imgIcon[1].style.opacity = '1'
    // }
    // if (obj.content.scrollTop > 1000) {
    //     obj.imgIcon[1].style.opacity = '0'
    //     obj.imgIcon[2].style.opacity = '1'
    // }
    // if (obj.content.scrollTop > 1500) {
    //     obj.imgIcon[2].style.opacity = '0'
    //     obj.imgIcon[3].style.opacity = '1'
    // }
    // if (obj.content.scrollTop > 2000) {
    //     obj.imgIcon[3].style.opacity = '0'
    //     obj.imgIcon[4].style.opacity = '1'
    // }
    // if (obj.content.scrollTop <= 60) {
    //     obj.imgIcon[0].style.opacity = '0'
    //     obj.imgIcon[1].style.opacity = '0'
    //     obj.imgIcon[2].style.opacity = '0'
    //     obj.imgIcon[3].style.opacity = '0'
    //     obj.imgIcon[4].style.opacity = '0'
    // }
});

obj.question[0].addEventListener('mouseover', () => {
    obj.textDescription[0].style.opacity = '1'
})
obj.question[0].addEventListener('mouseout', () => {
    obj.textDescription[0].style.opacity = '0'
})

obj.question[1].addEventListener('mouseover', () => {
    obj.textDescription[1].style.opacity = '1'
})
obj.question[1].addEventListener('mouseout', () => {
    obj.textDescription[1].style.opacity = '0'
})

obj.question[2].addEventListener('mouseover', () => {
    obj.textDescription[2].style.opacity = '1'
})
obj.question[2].addEventListener('mouseout', () => {
    obj.textDescription[2].style.opacity = '0'
})

obj.question[3].addEventListener('mouseover', () => {
    obj.textDescription[3].style.opacity = '1'
})
obj.question[3].addEventListener('mouseout', () => {
    obj.textDescription[3].style.opacity = '0'
})

obj.question[4].addEventListener('mouseover', () => {
    obj.textDescription[4].style.opacity = '1'
})
obj.question[4].addEventListener('mouseout', () => {
    obj.textDescription[4].style.opacity = '0'
})

obj.question[5].addEventListener('mouseover', () => {
    obj.textDescription[5].style.opacity = '1'
})
obj.question[5].addEventListener('mouseout', () => {
    obj.textDescription[5].style.opacity = '0'
})

obj.question[6].addEventListener('mouseover', () => {
    obj.textDescription[6].style.opacity = '1'
})
obj.question[6].addEventListener('mouseout', () => {
    obj.textDescription[6].style.opacity = '0'
})

obj.question[7].addEventListener('mouseover', () => {
    obj.textDescription[7].style.opacity = '1'
})
obj.question[7].addEventListener('mouseout', () => {
    obj.textDescription[7].style.opacity = '0'
})

obj.question[8].addEventListener('mouseover', () => {
    obj.textDescription[8].style.opacity = '1'
})
obj.question[8].addEventListener('mouseout', () => {
    obj.textDescription[8].style.opacity = '0'
})




