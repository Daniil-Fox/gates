import "./_vendor";
import vars from "./_vars";
import "./_functions";
import "./_components";

const objects = document.querySelectorAll(".object");

if (objects && objects.length > 0) {
  objects.forEach((el) => {
    const capture = el.querySelector(".object__link");
    el.addEventListener("mouseenter", (e) => {
      capture.style.maxWidth = capture.scrollWidth + "px";
    });

    el.addEventListener("mouseleave", (e) => {
      capture.style.maxWidth = null;
    });
  });
}

const playButtons = document.querySelectorAll("[data-video-play]");

playButtons.forEach((el) => {
  el.addEventListener("click", (e) => {
    e.preventDefault();
    const videoContainer = el.closest("[data-video-container]");
    const video = videoContainer.querySelector("[data-video-content]");
    video.classList.add("active");
    videoContainer.classList.add("active");
    video.setAttribute("controls", "");
    video.play();
  });
});
