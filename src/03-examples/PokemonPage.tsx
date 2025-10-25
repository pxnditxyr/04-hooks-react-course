import { useCounter } from "./useCounter";
import { usePokemon } from "./usePokemon";

export const PokemonPage = () => {

  const {
    count,
    increment,
    decrement,
  } = useCounter()

  const {
    pokemon,
    isLoading,
    formattedId,
  } = usePokemon({ id: count })

  return (
    <div className="bg-gradient flex flex-col items-center">
      <h1 className="text-2xl font-thin text-white">Pokémon</h1>
      <h3 className="text-xl font-bold text-white">#{ formattedId } { pokemon?.name }</h3>
      <img
        src={ pokemon?.imageUrl }
        alt={ pokemon?.name }
      />

      <div className="flex gap-2">

        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer"
          onClick={decrement}
          disabled={ count === 1 || isLoading }
        >
          Anterior
        </button>

        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer"
          onClick={increment}
          disabled={ isLoading }
        >
          Siguiente
        </button>

      </div>
    </div>
  );
};
