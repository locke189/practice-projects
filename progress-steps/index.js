const nextBtnDOM = document.querySelector(".steps__next");
const prevBtnDOM = document.querySelector(".steps__prev");
const stepsDOM = Array.from(document.querySelectorAll(".steps__step--js"));
const reverseStepsDOM = [...stepsDOM].reverse();

nextBtnDOM.addEventListener("click", () => {
  const nextStep = stepsDOM.find((step) => {
    return !step.classList.contains("steps__step--active");
  });
  if (nextStep) {
    nextStep.classList.add("steps__step--active");
  }
});

prevBtnDOM.addEventListener("click", () => {
  const nextStep = reverseStepsDOM.find((step) => {
    return step.classList.contains("steps__step--active");
  });
  if (nextStep) {
    nextStep.classList.remove("steps__step--active");
  }
});
