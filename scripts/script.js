document.addEventListener("DOMContentLoaded", function () {
  const nmbOne = document.getElementById("number-1");
  const nmbTwo = document.getElementById("number-2");
  const plus = document.getElementById("plus");
  const minus = document.getElementById("minus");
  const sum = document.getElementById("sum");

  function getParsedValues() {
    const num1 = parseFloat(nmbOne.value);
    const num2 = parseFloat(nmbTwo.value);
    return [num1, num2];
  }

  function plusFunc() {
    const [num1, num2] = getParsedValues();
    const result = num1 + num2;
    sum.textContent = result;
  }
  function minusFunc() {
    const [num1, num2] = getParsedValues();
    const result = num1 - num2;
    sum.textContent = result;
  }

  plus.addEventListener("click", plusFunc);
  minus.addEventListener("click", minusFunc);
});
