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


    })

}