import { sum } from "../constants.js";
import getParsedValues from "../parseValues.js";

export function multiplyFunc() {
  const [num1, num2] = getParsedValues();
  const result = num1 * num2;
  sum.textContent = result;
}
