const reqItems = document.querySelectorAll(".req-item");

reqItems.forEach((req) => {
  const copyBtn = req.querySelector(".req-item__btn");

  const valueCopy = req.querySelector(".req-item__value").textContent;
  const notify = req.querySelector(".req-item__notify");
  copyBtn.addEventListener("click", (e) => {
    navigator.clipboard
      .writeText(valueCopy)
      .then(function () {
        notify.style.opacity = 1;
        notify.style.zIndex = 1;
        notify.style.transform = window.matchMedia("(max-width: 768px").matches
          ? "translate(0%, -120%)"
          : "translate(50%, -120%)";

        setTimeout(() => {
          notify.style.opacity = null;
          notify.style.zIndex = null;
          notify.style.transform = null;
        }, 700);
      })
      .catch(function (error) {
        console.error("Error:", error);
      });
  });
});
