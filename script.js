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
    obj.content.scrollTop = 135
})
obj.btn[1].addEventListener('click', () => {
    obj.content.scrollTop = 675
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
    // obj.textDescription[0].style.opacity = '1'
    obj.textDescription[0].innerHTML = '<h2>Государственная регистрация продукции СГР ТС</h2> Свидетельство о государственной регистрации продукции таможенного союза — официальный документ, который подтверждает соответствие продукции требованиям безопасности технических регламентов ТС.Важно, что свидетельство о государственной регистрации продукции действует на территории стран - участниц ТС — России, Белоруссии, Казахстана, Киргизии и Армении. Свидетельство о госрегистрации продукции пришло на смену санитарно - эпидимиологическим заключениям(СЭЗ) в 2010 году. Вместо санитарного сертификата были введены Свидетельства о государственной регистрации продукции на требования Таможенного союза(СГР ТС) и экспертные заключения. <br> <span style="color:red;">ВАЖНО!</span> Ранее выданные санитарные сертификаты в настоящий момент уже недействительны.'
})
obj.question[0].addEventListener('mouseout', () => {
    // obj.textDescription[0].style.opacity = '0'
    obj.textDescription[0].innerHTML = ''

})

obj.question[1].addEventListener('mouseover', () => {
    obj.textDescription[0].innerHTML = '<h2>Стоимость и сроки оформления свидетельства о государственной регистрации продукции</h2>Срок государственной регистрации в конечной инстанции составляет от 2 до 4 недель, в зависимости от департамента и группы продукции Заявителем в данном документе может выступать российский производитель, либо уполномоченное лицо при импорте продукции. Ранее СГР выдавались бессрочно, но с 01.06.2019 года имеет срок действия 5 лет.'
})
obj.question[1].addEventListener('mouseout', () => {
    obj.textDescription[0].innerHTML = ''
})

obj.question[2].addEventListener('mouseover', () => {
    obj.textDescription[0].innerHTML = '<strong>Документы необходимые для оформления свидетельства о государственной регистрации продукции</strong><br><strong>При оформлении на отечественного производителя:</strong><li>реквизиты фирмы заявителя</li><li>регистрационные документы (ИНН, ОГРН, коды статистики)</li><li>ГОСТ или ТУ (технические условия), по которому производится продукция</li><li>договор аренды производственных площадей или свидетельство о собственности</li><li>проекция этикетки (по возможности)</li><strong>При оформлении на импортного производителя:</strong><li>Заявка</li><li>Техническое описание продукции</li><li>Проект этикетки</li><strong>На химическую продукцию дополнительно предоставляются:</strong><li>Паспорт безопасности MSDS с переводом на рус. яз.</li><li>Лист технических данных TDS с переводом на рус. яз.</li><li>Инструкция по применению</li>'
})
obj.question[2].addEventListener('mouseout', () => {
    obj.textDescription[0].innerHTML = ''
})

obj.question[3].addEventListener('mouseover', () => {
    obj.textDescription[0].innerHTML = '<strong>Что такое СГР (Свидетельство о гос. регистрации)</strong><br>Государственная регистрация продукции на требования безопасности Таможенного союза, является необходимым условием для перемещения товаров, подлежащих санитарно-эпидемиологическому надзору (контролю) на таможенной границе и таможенной территории ТС.<br><strong>Государственная регистрация продукции</strong> — единственный и необходимый способ для того, чтобы официально зарегистрировать производимый товар на территории Таможенного союза. Только получив свидетельство ЕВРАЗЭС, Вы сможете легально производить, хранить, перевозить, продавать изделия. Оформление свидетельства занимает значительный промежуток времени, даже при условии, что собраны все требуемые бумаги. Это связано с необходимостью тщательной проверки соответствия продукции всем предъявляемым по законодательству страны гигиеническим и санитарным нормам. Только после полной проверки, если нареканий не найдено, продукцию вносят в госреестр, и затем выдается <strong>свидетельство о государственной регистрации продукции.</strong>'
})
obj.question[3].addEventListener('mouseout', () => {
    obj.textDescription[0].innerHTML = ''
})

obj.question[4].addEventListener('mouseover', () => {
    obj.textDescription[0].innerHTML = ''
})
obj.question[4].addEventListener('mouseout', () => {
    obj.textDescription[0].innerHTML = ''
})

obj.question[5].addEventListener('mouseover', () => {
    obj.textDescription[5].style.opacity = '1'
})
obj.question[5].addEventListener('mouseout', () => {
    obj.textDescription[0].innerHTML = ''
})

obj.question[6].addEventListener('mouseover', () => {
    obj.textDescription[6].style.opacity = '1'
})
obj.question[6].addEventListener('mouseout', () => {
    obj.textDescription[0].innerHTML = ''
})

obj.question[7].addEventListener('mouseover', () => {
    obj.textDescription[7].style.opacity = '1'
})
obj.question[7].addEventListener('mouseout', () => {
    obj.textDescription[0].innerHTML = ''
})

obj.question[8].addEventListener('mouseover', () => {
    obj.textDescription[8].style.opacity = '1'
})
obj.question[8].addEventListener('mouseout', () => {
    obj.textDescription[0].innerHTML = ''
})




