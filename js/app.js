/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   initSwiper: function() { return /* binding */ initSwiper; }
/* harmony export */ });
const initSwiper = () => {
  const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: false,
    effect: 'creative',
    creativeEffect: {
      prev: {
        shadow: true,
        translate: [0, 0, -400],
      },
      next: {
        translate: ["100%", 0, 0],
      },
    },
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
};

/***/ }),
/* 2 */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   handleHeaderScroll: function() { return /* binding */ handleHeaderScroll; }
/* harmony export */ });
const handleHeaderScroll = (headerElement) => {
    const headerOffsetY = headerElement.offsetTop;

    window.addEventListener('scroll', () => {
        if (window.scrollY > headerOffsetY) {
            headerElement.classList.add('header-scroll');
        } else {
            headerElement.classList.remove('header-scroll');
        }
    });
}



/***/ }),
/* 3 */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   handleBurgerMenu: function() { return /* binding */ handleBurgerMenu; }
/* harmony export */ });
const handleBurgerMenu = (nav) => {
    const menu = document.getElementById('burgerMenu');
    const menuBtn = burgerMenu.getElementsByClassName('burger-menu__button')[0];
    const menuBackdrop = burgerMenu.getElementsByClassName('burger-menu__backdrop')[0];

    menuBtn.addEventListener('click', () => {
        menu.classList.toggle('opened');
        nav.classList.toggle('display');
        document.documentElement.classList.toggle('lock');
    });

    menuBackdrop.addEventListener('click', () => {
        menu.classList.remove('opened');
        nav.classList.remove('display');
        document.documentElement.classList.remove('lock');
    });
}



/***/ }),
/* 4 */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addDynamicAdaptive: function() { return /* binding */ addDynamicAdaptive; }
/* harmony export */ });
Element.prototype.insertChildAtIndex = function(child, index = 0) {
    if (index >= this.children.length) {
      this.appendChild(child)
    } else {
      this.insertBefore(child, this.children[index])
    }
}

const handleResize = (originalParent, parentId, element, mediaBreakoint, resolution, index = 0) => {
    const currentWidth = window.innerWidth;

    if (mediaBreakoint === 'min') {
        if (innerWidth <= resolution) {
            const parent = document.getElementById(parentId);
            parent.appendChild(element);
        } else {
            originalParent.insertChildAtIndex(element, index)
        }
    } else if (true) {
        if (currentWidth >= resolution) {
            const parent = document.getElementById(parentId);
            parent.appendChild(element);
        } else {
            originalParent.insertChildAtIndex(element, index)
        }
    }
}

const addDynamicAdaptive = () => {
    const elements = document.querySelectorAll('[data-portal-options]');

    for (let i = 0; i < elements.length; i++) {
        const [ parentId, mediaBreakpoint, resolution, index ] = elements[i].dataset.portalOptions.split(',');
        const originalParent = elements[i].parentElement;
        if (parentId && !mediaBreakpoint && !resolution) {
            const parent = document.getElementById(parentId);
            parent.appendChild(elements[i]);
        } else {
            window.addEventListener('resize', () => handleResize(originalParent, parentId, elements[i], mediaBreakpoint, resolution, index));
            handleResize(originalParent, parentId, elements[i], mediaBreakpoint, resolution, index);
        }
    }
}


// todo improve performance

/***/ })
/******/ 	]);
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_swiperInit_swiperInit_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _modules_headerScroll_header_scroll_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var _modules_burgerMenu_burgerMenu_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3);
/* harmony import */ var _modules_dynamicAdaptive_dynamicAdaptive_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4);
// add spoilers
// improve parallax

// import { handleParallax } from './modules/prlxMouse/prlx-mouse.js';


// import { handleAccordionOpen } from './modules/accordion/accordion.js';

// import { handleScrollTop } from './modules/scrollToTop/scrollToTop.js';

// add parallax effect
// handleParallax();

// add header scrolling
const header = document.getElementById('header');
(0,_modules_headerScroll_header_scroll_js__WEBPACK_IMPORTED_MODULE_1__.handleHeaderScroll)(header);

// add burgerMenu
const nav = document.getElementsByClassName('header-menu')[0];
(0,_modules_burgerMenu_burgerMenu_js__WEBPACK_IMPORTED_MODULE_2__.handleBurgerMenu)(nav);

// add accordion
// handleAccordionOpen();

(0,_modules_dynamicAdaptive_dynamicAdaptive_js__WEBPACK_IMPORTED_MODULE_3__.addDynamicAdaptive)();

// add scroll to top button
// handleScrollTop();

// initiate swiper
(0,_modules_swiperInit_swiperInit_js__WEBPACK_IMPORTED_MODULE_0__.initSwiper)();
  
}();
/******/ })()
;