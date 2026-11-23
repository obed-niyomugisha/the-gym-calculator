export default function Screen({ value }: { value: number }) {
  return (
    <div className="h-16 bg-screen text-6xl flex items-center justify-end px-2">
      {value}
    </div>
  );
}
