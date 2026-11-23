import { isPrimary } from "../utils/keys";

export default function Button({ value }: { value: string }) {
  return (
    <button
      className={
        "bg-button text-3xl border border-screen cursor-pointer " +
        (value == "0" ? "col-span-2 " : "") +
        (isPrimary(value) ? "bg-primary" : "text-black")
      }
    >
      {value}
    </button>
  );
}
