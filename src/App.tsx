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
    <main className="bg-jet">
      {cats.map((cat) => {
        return <Card image={cat.image} />;
      })}
    </main>
  );
}

export default App;
