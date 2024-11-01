import { nmbOne, nmbTwo } from "./constants.js";

export default function getParsedValues() {
  const num1 = parseFloat(nmbOne.value);
  const num2 = parseFloat(nmbTwo.value);
  return [num1, num2];
}
