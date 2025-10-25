import { useRef } from "react";


export const FocusScreen = () => {

  const inputRef = useRef<HTMLInputElement>( null )

  const onClick = () => {
    inputRef.current?.focus()
  }

  return (
    <div className="bg-gradient flex flex-col items-center gap-4">
      <h1 className="text-2xl font-thin text-white">Focus Screen</h1>
      <h3 className="text-xl font-bold text-white">Focus</h3>
      <input
        ref={inputRef}
        type="text"
        className="bg-white text-black rounded-md p-2 w-full max-w-xs"
        placeholder="Escribe aquí"
        autoFocus
      />
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer"
        onClick={onClick}
      >
        Set focus
      </button>
    </div>
  );
};
