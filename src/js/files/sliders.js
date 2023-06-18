/*
Документація по роботі у шаблоні:
Документація слайдера: https://swiperjs.com/
Сніппет(HTML): swiper
*/

// Підключаємо слайдер Swiper з node_modules
// При необхідності підключаємо додаткові модулі слайдера, вказуючи їх у {} через кому
// Приклад: { Navigation, Autoplay }
import Swiper, { Pagination, EffectFade, Autoplay, Navigation } from 'swiper';
/*
Основні модулі слайдера:
Navigation, Pagination, Autoplay,
EffectFade, Lazy, Manipulation
Детальніше дивись https://swiperjs.com/
*/

// Стилі Swiper
// Базові стилі
import "../../scss/base/swiper.scss";
// Повний набір стилів з scss/libs/swiper.scss
// import "../../scss/libs/swiper.scss";
// Повний набір стилів з node_modules
// import 'swiper/css';

// Ініціалізація слайдерів
function initSliders() {
	// Список слайдерів
	// Перевіряємо, чи є слайдер на сторінці
	if (document.querySelector('.swiper124214')) { // Вказуємо склас потрібного слайдера
		// Створюємо слайдер
		new Swiper('.swiper12412', { // Вказуємо склас потрібного слайдера
			// Підключаємо модулі слайдера
			// для конкретного випадку
			modules: [],
			observer: true,
			observeParents: true,
			slidesPerView: 1,
			spaceBetween: 0,
			autoHeight: true,
			speed: 800,

			//touchRatio: 0,
			//simulateTouch: false,
			//loop: true,
			//preloadImages: false,
			//lazy: true,

			/*
			// Ефекти
			effect: 'fade',
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},
			*/

			// Пагінація
			/*
			pagination: {
				el: '.swiper-pagination',
				clickable: true,
			},
			*/

			// Скроллбар
			/*
			scrollbar: {
				el: '.swiper-scrollbar',
				draggable: true,
			},
			*/

			// Кнопки "вліво/вправо"
			// navigation: {
			// 	prevEl: '.swiper-button-prev',
			// 	nextEl: '.swiper-button-next',
			// },
			/*
			// Брейкпоінти
			breakpoints: {
				640: {
					slidesPerView: 1,
					spaceBetween: 0,
					autoHeight: true,
				},
				768: {
					slidesPerView: 2,
					spaceBetween: 20,
				},
				992: {
					slidesPerView: 3,
					spaceBetween: 20,
				},
				1268: {
					slidesPerView: 4,
					spaceBetween: 30,
				},
			},
			*/
			// Події
			on: {

			}
		});
	}

	if (document.querySelector('.restaurant__slider')) {
		// Створюємо слайдер
		new Swiper('.restaurant__slider', {
			modules: [Pagination, Navigation],
			observer: true,
			observeParents: true,
			speed: 800,

			pagination: {
				el: '.slider-restaurant__pagination',
				clickable: true,
			},
			navigation: {
				prevEl: '.restaurant__slider .button-prev',
				nextEl: '.restaurant__slider .button-next',
			},

			breakpoints: {
				320: {
					slidesPerView: 1,
					spaceBetween: 10,
				},
				768: {
					slidesPerView: 1.5,
					spaceBetween: 40,
				},
				992: {
					slidesPerView: 2,
					spaceBetween: 40,
				},
				1268: {
					slidesPerView: 2,
					spaceBetween: 60,
				},
			},
		});
	}

	if (document.querySelector('.slider-rewievs')) {
		// Створюємо слайдер
		new Swiper('.slider-rewievs', {
			modules: [Navigation],
			observer: true,
			observeParents: true,
			speed: 800,


			navigation: {
				prevEl: '.rewievs__navigation .button-prev',
				nextEl: '.rewievs__navigation .button-next',
			},

			breakpoints: {
				320: {
					slidesPerView: 1,
					spaceBetween: 10,
				},
				768: {
					slidesPerView: 1.5,
					spaceBetween: 40,
				},
				992: {
					slidesPerView: 2,
					spaceBetween: 40,
				},
				1268: {
					slidesPerView: 2,
					spaceBetween: 60,
				},
			},
		});
	}

	for (const mobileSlider of document.querySelectorAll('.hero__slider')) {
        if (mobileSlider) {
            (function () {
                "use strict";

                const breakpoint = window.matchMedia("(min-width:768px)");
                let sliderOne;
                let sliderTwo;

                const enableSwiperOne = function () {
                    sliderOne = new Swiper('.hero__slider', {
						modules: [EffectFade, Autoplay],
						observer: true,
						observeParents: true,
						slidesPerView: 1,
						spaceBetween: 10,
						speed: 800,

						effect: 'fade',
						fadeEffect: {
							crossFade: true
						  },
						autoplay: {
							delay: 5000,
							disableOnInteraction: false,
						},
					});
                };
                const enableSwiperTwo = function () {
                    sliderTwo = new Swiper('.hero__slider', {
						modules: [Pagination],
						observer: true,
						observeParents: true,
						slidesPerView: 1,
						spaceBetween: 9,
						speed: 800,

						pagination: {
							el: '.hero__pagination',
							clickable: true,
						},
					});
                };

				console.log(mobileSlider)
                const breakpointChecker = function () {
                    if (breakpoint.matches === true) {
                        if (sliderTwo !== undefined) sliderTwo.destroy(true, true);

                        return enableSwiperOne();
                    } else if (breakpoint.matches === false) {
						if (sliderOne !== undefined) sliderOne.destroy(true, true);

                        return enableSwiperTwo();
                    }
                };

                breakpoint.addListener(breakpointChecker);
                breakpointChecker();
            })();
        }

    }

}
// Скролл на базі слайдера (за класом swiper scroll для оболонки слайдера)
function initSlidersScroll() {
	let sliderScrollItems = document.querySelectorAll('.swiper_scroll');
	if (sliderScrollItems.length > 0) {
		for (let index = 0; index < sliderScrollItems.length; index++) {
			const sliderScrollItem = sliderScrollItems[index];
			const sliderScrollBar = sliderScrollItem.querySelector('.swiper-scrollbar');
			const sliderScroll = new Swiper(sliderScrollItem, {
				observer: true,
				observeParents: true,
				direction: 'vertical',
				slidesPerView: 'auto',
				freeMode: {
					enabled: true,
				},
				scrollbar: {
					el: sliderScrollBar,
					draggable: true,
					snapOnRelease: false
				},
				mousewheel: {
					releaseOnEdges: true,
				},
			});
			sliderScroll.scrollbar.updateSize();
		}
	}
}

window.addEventListener("load", function (e) {
	// Запуск ініціалізації слайдерів
	initSliders();
	// Запуск ініціалізації скролла на базі слайдера (за класом swiper_scroll)
	//initSlidersScroll();
});