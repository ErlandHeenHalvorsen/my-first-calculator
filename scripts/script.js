import { plusFunc } from "./calculations/add.js";
import { minusFunc } from "./calculations/subt.js";
import { divideFunc } from "./calculations/divide.js";
import { multiplyFunc } from "./calculations/multiply.js";
import { plus, minus, divide, multiply } from "./constants.js";

window.onload = () => {
  plus.addEventListener("click", plusFunc);
  minus.addEventListener("click", minusFunc);
  divide.addEventListener("click", divideFunc);
  multiply.addEventListener("click", multiplyFunc);
};
