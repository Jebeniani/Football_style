/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./js/script.js":
/*!**********************!*\
  !*** ./js/script.js ***!
  \**********************/
/***/ (() => {

eval("(function ($) {\n  'use strict';\n\n  $('.main-slider').slick({\n    slidesToShow: 1,\n    slidesToScroll: 1,\n    infinite: true,\n    dots: true,\n    arrows: true,\n    autoplay: true,\n    autoplaySpeed: 6000,\n    prevArrow: '<div class=\"slick-control-prev\"><i class=\"tf-ion-android-arrow-back\"></i></div>',\n    nextArrow: '<div class=\"slick-control-next\"><i class=\"tf-ion-android-arrow-forward\"></i></div>'\n  });\n\n  $('.widget-categories .has-children').on('click', function () {\n    $('.widget-categories .has-children').removeClass('expanded');\n    $(this).addClass('expanded');\n  });\n\n  // Count Down JS\n  $('#simple-timer').syotimer({\n    year: 2023,\n    month: 9,\n    day: 26,\n    hour: 10,\n    minute: 15\n  });\n\n  // bootstrap slider range\n  $('.range-track').slider({});\n  $('.range-track').on('slide', function (slideEvt) {\n    $('.value').text('$' + slideEvt.value[0] + ' - ' + '$' + slideEvt.value[1]);\n  });\n\n  // overlay search\n  $('.search_toggle').on('click', function (e) {\n    e.preventDefault();\n    $('.search_toggle').toggleClass('active');\n    $('.overlay').toggleClass('open');\n    setTimeout(function () {\n      $('.search-form .form-control').focus();\n    }, 400);\n  });\n\n})(jQuery);\n\n\n\n//# sourceURL=webpack:///./js/script.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./js/script.js"]();
/******/ 	
/******/ })()
;