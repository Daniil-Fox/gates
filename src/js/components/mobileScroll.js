const header = document.querySelector("header");
const headerHeight = header.offsetHeight;
const siteContainer = document.querySelector(".site-container");

if (window.matchMedia("(max-width: 768px)").matches) {
  window.addEventListener("scroll", (e) => {
    let scrollDistanse = window.scrollY;

    if (scrollDistanse > 0) {
      header.classList.add("header--fixed");
      header.style.opacity = 1;
      siteContainer.style.paddingTop = headerHeight + "px";
    } else {
      header.classList.remove("header--fixed");
      siteContainer.style.paddingTop = null;
      header.style.opacity = null;
    }
  });
}
