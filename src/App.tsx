import GameBoard from "./components/GameBoard";
import useCats from "./hooks/useCats";

function App() {
  const [cats, isLoading] = useCats();

  if (isLoading) {
    return <h1>Loading Meow...</h1>;
  }

  return (
    <main className="bg-jet w-screen h-screen overflow-hidden ">
      <GameBoard cats={cats} />
    </main>
  );
}

export default App;
