import { useEffect } from "react";
import { getCats } from "./api/catService";

function App() {
  useEffect(() => {
    const loadData = async () => {
      try {
        const data = await getCats(12);
        return data;
      } catch (error) {
        console.error(error);
      }
    };
    loadData();
  }, []);

  return (
    <main>
      <h1>Hello World!</h1>
    </main>
  );
}

export default App;
