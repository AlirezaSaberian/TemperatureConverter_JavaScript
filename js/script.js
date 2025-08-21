const converter = document.querySelector("#converter");
const result = document.querySelector(".result");
const convertButton = document.querySelector(".convertButton");
const resetButton = document.querySelector(".resetButton");

const fromUnit = document.querySelector("#fromUnit");
const toUnit = document.querySelector("#toUnit");
const themeToggle = document.querySelector("#themeToggle");

const toCelsius = {
  "°C": (val) => val,
  "°F": (val) => ((val - 32) * 5) / 9,
  K: (val) => val - 273.15,
  "°R": (val) => ((val - 491.67) * 5) / 9,
};

const fromCelsius = {
  "°C": (val) => val,
  "°F": (val) => (val * 9) / 5 + 32,
  K: (val) => val + 273.15,
  "°R": (val) => ((val + 273.15) * 9) / 5,
};

function convert() {
  if (converter.value === "") {
    result.innerHTML = "Insert correct value";
    result.style.color = "var(--error-color)";
  } else if (isNaN(converter.value)) {
    result.innerHTML = "Please enter a number";
    result.style.color = "var(--error-color)";
  } else {
    let inputValue = parseFloat(converter.value);
    let inCelsius = toCelsius[fromUnit.value](inputValue);
    let resultValue = fromCelsius[toUnit.value](inCelsius);

    result.style.color = "var(--primary-color)";
    result.innerHTML = `${inputValue}${fromUnit.value} = ${resultValue.toFixed(
      2
    )}${toUnit.value}`;
  }
}

function reset() {
  result.innerHTML = "";
  converter.value = "";
}

convertButton.addEventListener("click", convert);
resetButton.addEventListener("click", reset);

converter.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    convert();
  }
});

const themeCheckbox = document.querySelector("#themeToggleCheckbox");

themeCheckbox.addEventListener("change", () => {
  document.body.classList.toggle("dark", themeCheckbox.checked);
});
