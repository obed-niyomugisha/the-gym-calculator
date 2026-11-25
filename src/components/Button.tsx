import { useContext } from "react";
import { isPrimary } from "../utils/keys";
import clsx from "clsx";
import { Calculator } from "../utils/context";

export default function Button({ value }: { value: string }) {
  const calculator = useContext(Calculator);

  function handleClick() {
    if (!calculator) return;
    const {
      screenValue,
      setScreenValue,
      operand,
      setOperand,
      operator,
      setOperator,
    } = calculator;

    const numValue = Number(value);

    if (!Number.isNaN(numValue)) {
      setScreenValue(screenValue * 10 + numValue);
    }

    if (value == "AC") {
      setScreenValue(0);
    }

    if (isPrimary(value) && value !== "=") {
      setOperand(screenValue);
      setOperator(value);
      setScreenValue(0);
    }

    if (value == "=") {
      switch (operator) {
        case "+":
          setScreenValue(operand + screenValue);
          break;
        case "-":
          setScreenValue(operand - screenValue);
          break;
        case "x":
          setScreenValue(operand * screenValue);
          break;
        case "÷":
          setScreenValue(operand / screenValue);
          break;
      }
    }

    if (value == "+/-") {
      setScreenValue(screenValue * -1);
    }

    if (value == "%") {
      setScreenValue(screenValue / 100);
    }
  }

  return (
    <button
      onClick={handleClick}
      className={clsx(
        "bg-button text-3xl border border-screen cursor-pointer",
        {
          "col-span-2": value == "0",
          "bg-primary": isPrimary(value),
          "text-black": !isPrimary(value),
        },
      )}
    >
      {value}
    </button>
  );
}
