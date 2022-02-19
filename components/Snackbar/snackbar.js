const baselineBtn = document.querySelector("#baseline");
const leadingBtn = document.querySelector("#leading");
const stackedBtn = document.querySelector("#stacked");
const baselineSnackbar = document.querySelector("#baseline_snackbar");
const stackedSnackbar = document.querySelector("#stacked_snackbar");
const closeBtn = document.querySelector("#baseline_close");
const leadingSnackbar = document.querySelector("#leading_snackbar");
const stackCloseBtn = document.querySelector("#stack_close");
const leadingCloseBtn = document.querySelector("#leading_close");

leadingBtn.addEventListener("click", () => {
  leadingSnackbar.style.visibility = "visible";
});

stackedBtn.addEventListener("click", () => {
  stackedSnackbar.style.visibility = "visible";
});

baselineBtn.addEventListener("click", () => {
  baselineSnackbar.style.visibility = "visible";
});

closeBtn.addEventListener("click", () => {
  baselineSnackbar.style.visibility = "hidden";
});

stackCloseBtn.addEventListener("click", () => {
  stackedSnackbar.style.visibility = "hidden";
});

leadingCloseBtn.addEventListener("click", () => {
  leadingSnackbar.style.visibility = "hidden";
});
