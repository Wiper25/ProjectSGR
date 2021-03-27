const obj = {
    wrapper: document.querySelector('.wrapper'),
    content: document.querySelector('.content'),
    btnMenu: document.querySelector('.btnMenu'),
    menuBlock: document.querySelector('.menuBlock'),
    itemBlock: document.querySelectorAll('.item'),
    btn: document.querySelectorAll('.btn'),
    imgIcon: document.querySelectorAll('.imgIcon')
}

obj.wrapper.style.height = innerHeight + 'px'
obj.content.style.height = innerHeight - 100 + 'px'

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
obj.content.addEventListener('scroll', function () {
    console.log(obj.content.scrollTop)
    if (obj.content.scrollTop > 50) {
        obj.imgIcon[0].style.opacity = '1'
        obj.menuBlock.style.width = '200px'
        obj.menuBlock.style.height = '0px'
        obj.menuBlock.style.opacity = '0'
        obj.menuBlock.style.zIndex = '-10'
        obj.btnMenu.classList.remove("change");
    }
    if (obj.content.scrollTop > 500) {
        obj.imgIcon[0].style.opacity = '0'
        obj.imgIcon[1].style.opacity = '1'
    }
    if (obj.content.scrollTop > 1000) {
        obj.imgIcon[1].style.opacity = '0'
        obj.imgIcon[2].style.opacity = '1'
    }
    if (obj.content.scrollTop > 1500) {
        obj.imgIcon[2].style.opacity = '0'
        obj.imgIcon[3].style.opacity = '1'
    }
    if (obj.content.scrollTop > 2000) {
        obj.imgIcon[3].style.opacity = '0'
        obj.imgIcon[4].style.opacity = '1'
    }
    if (obj.content.scrollTop <= 60) {
        obj.imgIcon[0].style.opacity = '0'
        obj.imgIcon[1].style.opacity = '0'
        obj.imgIcon[2].style.opacity = '0'
        obj.imgIcon[3].style.opacity = '0'
        obj.imgIcon[4].style.opacity = '0'
    }
});

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