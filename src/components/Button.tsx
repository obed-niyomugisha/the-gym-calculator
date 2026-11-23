import { isPrimary } from "../utils/keys";
import clsx from "clsx";

export default function Button({ value }: { value: string }) {
  return (
    <button
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
