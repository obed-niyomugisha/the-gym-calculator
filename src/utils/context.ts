import { createContext } from "react";

export type Operator = string;
export type Operands = [number, number];

type CalculatorType = {
  operands: Operands;
  operator: Operator;
  screenValue: number;
  setOperator: (operator: Operator) => void;
  setOperands: (operand: Operands) => void;
  setScreenValue: (value: number) => void;
};

export const Calculator = createContext<CalculatorType | null>(null);
