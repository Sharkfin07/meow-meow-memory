import { useEffect, useState } from "react";
import { getCats } from "./api/catService";
import Card from "./components/Card";
import type { CardItem } from "./types/cat";

function App() {
  const [cats, setCats] = useState<CardItem[]>([]);

  useEffect(() => {
    const loadData = async () => {
      try {
        const data = await getCats(12);
        setCats(data);
      } catch (error) {
        console.error(error);
      }
    };
    loadData();
  }, []);

  return (
    <main className="bg-jet w-screen h-screen overflow-hidden ">
      <div className="flex flex-wrap gap-2">
        {cats.map((cat) => {
          return <Card image={cat.image} />;
        })}
      </div>
    </main>
  );
}

export default App;
