// add spoilers
// improve parallax
// import { initSwiper } from './modules/swiperInit/swiperInit.js';
// import { handleParallax } from './modules/prlxMouse/prlx-mouse.js';
import { handleHeaderScroll } from './modules/headerScroll/header-scroll.js';
import { handleBurgerMenu } from './modules/burgerMenu/burgerMenu.js';
// import { handleAccordionOpen } from './modules/accordion/accordion.js';
import { addDynamicAdaptive } from './modules/dynamicAdaptive/dynamicAdaptive.js';
// import { handleScrollTop } from './modules/scrollToTop/scrollToTop.js';

// add parallax effect
// handleParallax();

// add header scrolling
const header = document.getElementById('header');
handleHeaderScroll(header);

// add burgerMenu
const nav = document.getElementsByClassName('header-menu')[0];
handleBurgerMenu(nav);

// add accordion
// handleAccordionOpen();

addDynamicAdaptive();

// add scroll to top button
// handleScrollTop();

// initiate swiper
// initSwiper();
  