const nextBtnDOM = document.querySelector(".steps__next");
const prevBtnDOM = document.querySelector(".steps__prev");
const stepsDOM = Array.from(document.querySelectorAll(".steps__step"));
const reverseStepsDOM = [...stepsDOM].reverse();

let activeIndex = 0;

nextBtnDOM.addEventListener("click", () => {
  if (activeIndex < stepsDOM.length - 1) {
    activeIndex++;
    stepsDOM[activeIndex].classList.add("steps__step--active");
    prevBtnDOM.disabled = false;
    nextBtnDOM.disabled = activeIndex === stepsDOM.length - 1 ? true : false;
  }
});

prevBtnDOM.addEventListener("click", () => {
  if (activeIndex > 0) {
    stepsDOM[activeIndex].classList.remove("steps__step--active");
    activeIndex--;
    nextBtnDOM.disabled = false;
    prevBtnDOM.disabled = activeIndex === 0 ? true : false;
  }
});
