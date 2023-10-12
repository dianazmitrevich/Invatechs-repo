/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/***/ (function() {

eval("const outer = document.querySelector(\".outer-bg\");\n\ndocument.addEventListener(\"scroll\", () => {\n    if (getBodyScrollTop() > 0) {\n        outer.classList.add(\"header-scroll\");\n    } else {\n        outer.classList.remove(\"header-scroll\");\n    }\n\n    centerImagesCaseStudies();\n});\n\nfunction getBodyScrollTop() {\n    return self.pageYOffset || (document.documentElement && document.documentElement.scrollTop) || (document.body && document.body.scrollTop);\n}\n\n// var caseStudiesImageBlockHeight = $('.main-cases .item__image .image-wrap').height();\n\nfunction centerImagesCaseStudies() {\n    // let windowHeight = $(window).height();\n    // let windowOffsetY = $(window).scrollTop();\n    // console.log(windowOffsetY)\n\n    // let offsetY = (windowHeight - caseStudiesImageBlockHeight) / 2;\n\n    // $('.main-cases .item__image .image-wrap').css({\n    //     'position': 'absolute',\n    //     'top': offsetY + 'px',\n    // });\n\n    const innerBlocks = document.querySelectorAll('.main-cases .item__image .image-wrap');\n    const parentBlock = document.querySelector('.main-cases .item__image');\n    var count = 0;\n\n    innerBlocks.forEach((innerBlock, index) => {\n        let windowHeight = $(window).height();\n        let windowWidth = $(window).width();\n\n        const fixedHeight = (windowHeight - innerBlock.clientHeight) / 2;\n\n        const parentBlockRect = parentBlock.getBoundingClientRect();\n\n        var innerBlockTop = 0;\n\n        if (index > 0) {\n            if (windowWidth < 1140) {\n                innerBlockTop = fixedHeight - parentBlockRect.top - index * 850;\n            } else\n                innerBlockTop = fixedHeight - parentBlockRect.top - index * 900;\n        }\n        else {\n            innerBlockTop = fixedHeight - parentBlockRect.top;\n        }\n\n        innerBlock.style.position = 'absolute';\n        innerBlock.style.top = `${innerBlockTop}px`;\n    });\n\n    // const innerBlock = document.querySelector('.main-cases .item__image .image-wrap');\n    // const parentBlock = document.querySelector('.main-cases .item__image');\n    // const fixedHeight = 100; \n    // Здесь указываем желаемую фиксированную высоту в пикселях\n\n    // Вычисляем позицию внутреннего блока\n    // const parentBlockRect = parentBlock.getBoundingClientRect();\n    // const innerBlockTop = fixedHeight - parentBlockRect.top;\n\n    // Применяем абсолютное позиционирование к внутреннему блоку\n    // innerBlock.style.position = 'absolute';\n    // innerBlock.style.top = `${innerBlockTop}px`;\n}\n\n$('.industries-list__items-slider').slick({\n    prevArrow: \"<div class='slider__arrow slider__arrow-left'></div>\",\n    nextArrow: \"<div class='slider__arrow slider__arrow-right'></div>\",\n    autoplay: true,\n    autoplaySpeed: 1000,\n    variableWidth: true,\n    slidesToShow: 1,\n    slidesToScroll: 3,\n});\n\n$('.technologies-list__slider').slick({\n    arrows: false,\n    dots: true,\n    dotsClass: 'slider__dots',\n    slidesToShow: 1,\n    adaptiveHeight: true,\n    fade: true,\n    speed: 1000,\n});\n\n$('.customers-reviews__slider').slick({\n    arrows: false,\n    dots: true,\n    dotsClass: 'slider__dots',\n    slidesToShow: 1,\n    adaptiveHeight: true,\n    fade: true,\n    speed: 1000,\n});\n\n\n$('.customers-list__items-slider').slick({\n    arrows: false,\n    dots: false,\n    slidesToShow: 1,\n    infinite: true,\n    // autoplay: true,\n    // speed: 100,\n    variableWidth: true,\n});\n\n// let bigMenuAnimate = document.querySelectorAll(\".big-menu__btn\");\n// let bigMenu = document.querySelector(\".header__col-big-menu\");\n\n// if (bigMenuAnimate && bigMenu) {\n//     bigMenuAnimate.forEach(element => {\n//         element.addEventListener(\"click\", () => {\n//             let menu = bigMenu.classList;\n//             let body = document.querySelector(\"body\").classList;\n\n//             menu.contains(\"show\") ? menu.remove(\"show\") : menu.add(\"show\");\n//             body.contains(\"stop-scroll\") ? body.remove(\"stop-scroll\") : body.add(\"stop-scroll\");\n//         });\n//     });\n// }\n\n//# sourceURL=webpack://gulp-starter/./src/js/main.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/js/main.js"]();
/******/ 	
/******/ })()
;