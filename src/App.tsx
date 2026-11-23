import Screen from "./components/Screen";
import Keyboard from "./components/Keyboard";

export default function App() {
  return (
    <main className="grid place-content-center min-h-svh">
      <div className="w-md h-150 grid grid-rows-[auto_1fr]">
        <Screen value={0}></Screen>
        <Keyboard></Keyboard>
      </div>
    </main>
  );
}
