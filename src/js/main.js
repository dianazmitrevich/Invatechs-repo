const outer = document.querySelector(".outer-bg");

document.addEventListener("scroll", () => {
    if (getBodyScrollTop() > 0) {
        outer.classList.add("header-scroll");
    } else {
        outer.classList.remove("header-scroll");
    }

    centerImagesCaseStudies();
});

function getBodyScrollTop() {
    return self.pageYOffset || (document.documentElement && document.documentElement.scrollTop) || (document.body && document.body.scrollTop);
}

// var caseStudiesImageBlockHeight = $('.main-cases .item__image .image-wrap').height();

function centerImagesCaseStudies() {
    // let windowHeight = $(window).height();
    // let windowOffsetY = $(window).scrollTop();
    // console.log(windowOffsetY)

    // let offsetY = (windowHeight - caseStudiesImageBlockHeight) / 2;

    // $('.main-cases .item__image .image-wrap').css({
    //     'position': 'absolute',
    //     'top': offsetY + 'px',
    // });

    const innerBlocks = document.querySelectorAll('.main-cases .item__image .image-wrap');
    const parentBlock = document.querySelector('.main-cases .item__image');
    var count = 0;

    innerBlocks.forEach((innerBlock, index) => {
        let windowHeight = $(window).height();

        const fixedHeight = (windowHeight - innerBlock.clientHeight) / 2;

        const parentBlockRect = parentBlock.getBoundingClientRect();

        var innerBlockTop = 0;

        if (index > 0) {
            innerBlockTop = fixedHeight - parentBlockRect.top - index * 900;
        }
        else {
            innerBlockTop = fixedHeight - parentBlockRect.top;
        }

        innerBlock.style.position = 'absolute';
        innerBlock.style.top = `${innerBlockTop}px`;
    });

    // const innerBlock = document.querySelector('.main-cases .item__image .image-wrap');
    // const parentBlock = document.querySelector('.main-cases .item__image');
    // const fixedHeight = 100; 
    // Здесь указываем желаемую фиксированную высоту в пикселях

    // Вычисляем позицию внутреннего блока
    // const parentBlockRect = parentBlock.getBoundingClientRect();
    // const innerBlockTop = fixedHeight - parentBlockRect.top;

    // Применяем абсолютное позиционирование к внутреннему блоку
    // innerBlock.style.position = 'absolute';
    // innerBlock.style.top = `${innerBlockTop}px`;
}

$('.industries-list__items-slider').slick({
    prevArrow: "<div class='slider__arrow slider__arrow-left'></div>",
    nextArrow: "<div class='slider__arrow slider__arrow-right'></div>",
    autoplay: true,
    autoplaySpeed: 1000,
    variableWidth: true,
    slidesToShow: 1,
    slidesToScroll: 3,
});

$('.technologies-list__slider').slick({
    arrows: false,
    dots: true,
    dotsClass: 'slider__dots',
    slidesToShow: 1,
    adaptiveHeight: true,
    fade: true,
    speed: 1000,
});

$('.customers-reviews__slider').slick({
    arrows: false,
    dots: true,
    dotsClass: 'slider__dots',
    slidesToShow: 1,
    adaptiveHeight: true,
    fade: true,
    speed: 1000,
});


$('.customers-list__items-slider').slick({
    arrows: false,
    dots: false,
    slidesToShow: 1,
    infinite: true,
    // autoplay: true,
    // speed: 100,
    variableWidth: true,
});

// let bigMenuAnimate = document.querySelectorAll(".big-menu__btn");
// let bigMenu = document.querySelector(".header__col-big-menu");

// if (bigMenuAnimate && bigMenu) {
//     bigMenuAnimate.forEach(element => {
//         element.addEventListener("click", () => {
//             let menu = bigMenu.classList;
//             let body = document.querySelector("body").classList;

//             menu.contains("show") ? menu.remove("show") : menu.add("show");
//             body.contains("stop-scroll") ? body.remove("stop-scroll") : body.add("stop-scroll");
//         });
//     });
// }