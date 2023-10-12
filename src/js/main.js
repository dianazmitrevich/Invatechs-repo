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
        let windowWidth = $(window).width();

        const fixedHeight = (windowHeight - innerBlock.clientHeight) / 2;

        const parentBlockRect = parentBlock.getBoundingClientRect();

        var innerBlockTop = 0;

        if (index > 0) {
            if (windowWidth < 1140) {
                innerBlockTop = fixedHeight - parentBlockRect.top - index * 850;
            } else
                innerBlockTop = fixedHeight - parentBlockRect.top - index * 900;
        }
        else {
            innerBlockTop = fixedHeight - parentBlockRect.top;
        }

        innerBlock.style.position = 'absolute';
        innerBlock.style.top = `${innerBlockTop}px`;
    });
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
    variableWidth: true,
});

let accordionBtns = document.querySelectorAll(".accordion-wrap .accordion-head");

if (accordionBtns) {
    accordionBtns.forEach(element => {
        element.addEventListener("click", () => {
            let accordion = element.parentNode.querySelector(".accordion").classList;
            let body = document.querySelector("body").classList;

            accordion.contains("accordion-opened") ? accordion.remove("accordion-opened") : accordion.add("accordion-opened");
        });
    });
}

let mobMenu = document.querySelector(".header__col-burger .burger__btn");

if (mobMenu) {
    mobMenu.addEventListener("click", () => {
        let menu = document.querySelector(".header__col-burger").classList;
        let body = document.querySelector("body").classList;

        menu.contains("header__col-burger-opened") ? menu.remove("header__col-burger-opened") : menu.add("header__col-burger-opened");
        body.contains("stop-scroll") ? body.remove("stop-scroll") : body.add("stop-scroll");
    });
}