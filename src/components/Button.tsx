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
      operands,
      setOperands,
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
      setOperands([screenValue, 0]);
      setOperator(value);
      setScreenValue(0);
    }

    if (value == "=") {
      const [firstOperand] = operands;

      switch (operator) {
        case "+":
          setScreenValue(firstOperand + screenValue);
          break;
        case "-":
          setScreenValue(firstOperand - screenValue);
          break;
        case "x":
          setScreenValue(firstOperand * screenValue);
          break;
        case "÷":
          setScreenValue(firstOperand / screenValue);
          break;
      }
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
