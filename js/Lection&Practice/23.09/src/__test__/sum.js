import { type } from "os";

function sum(...args) {
  const change = args.some(arg => typeof arg !== "number");
  if (change) return null;
  return args.reduce((elem, acc) => acc + elem, 0);
}
export default sum;
