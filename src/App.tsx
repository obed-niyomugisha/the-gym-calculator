import Screen from "./components/Screen";
import Keyboard from "./components/Keyboard";
import { Calculator } from "./utils/context";
import { useState } from "react";

export default function App() {
  const [operator, setOperator] = useState("+");
  const [operand, setOperand] = useState(0);
  const [screenValue, setScreenValue] = useState(0);

  const calculator = {
    operator,
    operand,
    screenValue,
    setOperator,
    setOperand,
    setScreenValue,
  };

  return (
    <main className="grid place-content-center min-h-svh">
      <div className="w-md h-150 grid grid-rows-[auto_1fr]">
        <Calculator value={calculator}>
          <Screen value={screenValue}></Screen>
          <Keyboard></Keyboard>
        </Calculator>
      </div>
    </main>
  );
}
