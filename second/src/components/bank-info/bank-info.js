import "./bank-info.scss";

const oldBankSum = document.querySelector(".bank-info__sum");
const oldValueBankSum = oldBankSum.innerHTML;
const numSum = Number(oldBankSum.textContent);
const numSumMl = numSum * 10 ** 6;
const sumMl = new Intl.NumberFormat("ru-RU").format(numSumMl);

// document.addEventListener("click", function (event) {
//   if (element.matches(".")) {
//   }
// });

window.addEventListener("resize", function () {
  if (window.matchMedia("(min-width: 768px)").matches) {
    oldBankSum.innerHTML = sumMl;
  } else {
    oldBankSum.innerHTML = oldValueBankSum;
  }
});
