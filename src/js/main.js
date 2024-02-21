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
