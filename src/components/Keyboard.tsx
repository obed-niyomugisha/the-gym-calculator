import Button from "./Button";
import { KEYS } from "../utils/keys";

export default function Keyboard() {
  return (
    <div className="grid grid-cols-4">
      {KEYS.map((key) => (
        <Button key={key} value={key}></Button>
      ))}
    </div>
  );
}
