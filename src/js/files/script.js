// Підключення функціоналу "Чертоги Фрілансера"
import { isMobile } from "./functions.js";
// Підключення списку активних модулів
import { flsModules } from "./modules.js";


window.addEventListener('load', pageLoad)

function pageLoad() {

    document.documentElement.addEventListener('click', (event) => {
        const targetElement = event.target
        const htmlTag = document.documentElement


        if (targetElement.closest('[data-search-btn]') && htmlTag.closest('.touch')) {
            targetElement.closest('[data-search]').classList.toggle('active')
        }


        if (targetElement.closest('.filter__button')) {
            document.querySelector('.filter__button').classList.toggle('active')
            document.querySelector('.filter__content').classList.toggle('active')
        }

        if (targetElement.closest('.poster__button')) {
            document.querySelector('.poster__button').classList.toggle('active')
            document.querySelector('.poster__list').classList.toggle('active')
        }

        if (targetElement.closest('.poster__list-close') && document.querySelector('.poster__list.active')) {
            document.querySelector('.poster__button').classList.toggle('active')
            document.querySelector('.poster__list').classList.toggle('active')
        }

    })

}