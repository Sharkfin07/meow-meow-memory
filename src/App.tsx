import Card from "./components/Card";
import useCats from "./hooks/useCats";

function App() {
  const [cats, shuffleCats] = useCats();

  return (
    <main className="bg-jet w-screen h-screen overflow-hidden ">
      <button
        onClick={() => {
          shuffleCats();
        }}
        className="bg-white w-full"
      >
        Shuffle
      </button>
      <div className="flex flex-wrap gap-2">
        {cats.map((cat) => {
          return <Card image={cat.image} />;
        })}
      </div>
    </main>
  );
}

export default App;
