import Swiper, { Navigation, Pagination } from "swiper";
Swiper.use([Navigation, Pagination]);

window.addEventListener("DOMContentLoaded", () => {
  const resizableSwiper = (
    breakpoint,
    swiperClass,
    swiperSettings,
    callback
  ) => {
    let swiper;

    breakpoint = window.matchMedia(breakpoint);

    const enableSwiper = function (className, settings) {
      swiper = new Swiper(className, settings);

      if (callback) {
        callback(swiper);
      }
    };

    const checker = function () {
      if (breakpoint.matches) {
        return enableSwiper(swiperClass, swiperSettings);
      } else {
        if (swiper !== undefined) swiper.destroy(true, true);
        return;
      }
    };

    breakpoint.addEventListener("change", checker);
    checker();
  };

  const someFunc = (instance) => {
    if (instance) {
      instance.on("slideChange", function (e) {
        console.log("*** mySwiper.activeIndex", instance.activeIndex);
      });
    }
  };

  resizableSwiper("(max-width: 768px)", ".objects__slider", {
    slidesPerView: "auto",
    spaceBetween: 8,
  });
  resizableSwiper("(max-width: 768px)", ".news-sec__slider", {
    slidesPerView: "auto",
    spaceBetween: 8,
  });
  resizableSwiper("(max-width: 768px)", ".steps__slider", {
    slidesPerView: "auto",
    spaceBetween: 8,
  });
  resizableSwiper("(max-width: 768px)", ".process__slider", {
    slidesPerView: "auto",
    spaceBetween: 8,
  });
  resizableSwiper("(max-width: 768px)", ".faq__slider", {
    slidesPerView: "auto",
    spaceBetween: 8,
  });
  resizableSwiper("(max-width: 768px)", ".gate-chars__slider", {
    slidesPerView: "auto",
    spaceBetween: 8,
  });
});

new Swiper(".points__slider", {
  slidesPerView: "auto",
});
new Swiper(".team__slider", {
  slidesPerView: "auto",
  spaceBetween: 20,
  navigation: {
    prevEl: ".team-btn-prev",
    nextEl: ".team-btn-next",
  },
});
new Swiper(".documents__slider", {
  slidesPerView: "auto",
  spaceBetween: 20,
  navigation: {
    prevEl: ".doc-btn-prev",
    nextEl: ".doc-btn-next",
  },
});
new Swiper(".prod__slider", {
  slidesPerView: 1,
  loop: true,
  navigation: {
    prevEl: ".prod__btn--prev",
    nextEl: ".prod__btn--next",
  },
});

new Swiper(".ready-buttons__slider", {
  slidesPerView: "auto",
  spaceBetween: 8,
});
const galleryThumbs = new Swiper(".item-hero__thumbs", {
  slidesPerGroup: 1,
  slidesPerView: 9,
  slidesPerColumn: 3,
  noSwiping: false,
});

const galleryTop = new Swiper(".item-hero__slider", {
  slidesPerView: "auto",
  thumbs: {
    swiper: galleryThumbs,
  },
});
