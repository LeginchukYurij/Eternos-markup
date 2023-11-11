import Swiper from "swiper";
import { Pagination, EffectFade, Thumbs, Autoplay } from "swiper/modules";

(() => {
    const textSlider = document.querySelector(".how-swap-module__text-slider");
    const imgSlider = document.querySelector(".how-swap-module__img-slider");

    if (textSlider, imgSlider) {
        const pagination = textSlider.querySelector(".custom-dot-pagination");
        const dots = pagination.querySelectorAll(".dot");


        const imgs = new Swiper(imgSlider, {
            loop: true,
            spaceBetween: 10,
            slidesPerView: 1,
            freeMode: true,
            speed: 1000,
            watchSlidesProgress: true,
        });

        const txt = new Swiper(textSlider, {
            loop: true,
            spaceBetween: 10,
            modules: [Pagination, EffectFade, Thumbs, Autoplay],
            thumbs: {
                swiper: imgs,
            },
            effect: "fade",
            fadeEffect: {
                crossFade: true
            },
            speed: 1000,
            autoplay: true,
            // autoHeight: true,
            calculateHeight: true,
            pagination: {
                type: "fraction",
                el: textSlider.querySelector(".swiper-pagination"),

                renderFraction: function (currentClass, totalClass) {
                    return "<span class=\"" + currentClass + "\"></span>" +
                        "/" +
                        "<span class=\"" + "" + totalClass + "\"></span>";
                }
            },

            on: {
                slideChange: (swiper) => {

                    const i = swiper.realIndex + 1;

                    if (pagination) {

                        const curDot = pagination.querySelector(`.dot:nth-child(${i})`);

                        dots.forEach(dot => {
                            dot.classList.remove("active");
                        });

                        curDot.classList.add("active");
                    }
                }
            }
        });


        dots.forEach((dot) => {
            dot.addEventListener("click", function () {
                const n = this.dataset.slideNum;
                txt.slideTo(n);
            });
        });

    }
})();