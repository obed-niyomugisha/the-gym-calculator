export const KEYS = [
  "AC",
  "+/-",
  "%",
  "÷",
  "7",
  "8",
  "9",
  "x",
  "4",
  "5",
  "6",
  "-",
  "1",
  "2",
  "3",
  "+",
  "0",
  ".",
  "=",
];

export function isPrimary(key: string) {
  return ["÷", "x", "-", "+", "="].includes(key);
}
