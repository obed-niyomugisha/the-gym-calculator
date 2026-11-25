import { createContext } from "react";

type CalculatorType = {
  operand: number;
  operator: string;
  screenValue: number;
  setOperator: (operator: string) => void;
  setOperand: (operand: number) => void;
  setScreenValue: (value: number) => void;
};

export const Calculator = createContext<CalculatorType | null>(null);
