const rates = {
  AZN: 1,
  USD: 1.7,
  EUR: 1.97,
  TRY: 0.039,
};

const leftInput = document.querySelector(".left-input");
const rightInput = document.querySelector(".right-input");
const leftButtons = document.querySelectorAll(".btnLeft li");
const rightButtons = document.querySelectorAll(".btnRight li");

let fromCurrency = "AZN";
let toCurrency = "USD";

const calculate = () => {
  const amount = Number(leftInput.value);
  const result = (amount * rates[fromCurrency]) / rates[toCurrency];

  rightInput.value = result.toFixed(2);
};

leftButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    leftButtons.forEach((item) => item.classList.remove("active"));
    btn.classList.add("active");
    fromCurrency = btn.innerText;
    calculate();
  });
});

rightButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    rightButtons.forEach((item) => item.classList.remove("active"));
    btn.classList.add("active");
    toCurrency = btn.innerText;
    calculate();
  });
});

leftInput.addEventListener("input", calculate);
calculate();
