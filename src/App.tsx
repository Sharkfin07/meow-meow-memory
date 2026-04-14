import { useLottie } from "lottie-react";
import GameBoard from "./components/GameBoard";
import useCats from "./hooks/useCats";
import bitCat from "./assets/lottie/bitCat.json";
import Logo from "./components/Logo";

function App() {
  const [cats, isLoading] = useCats();

  const lottieOptions = {
    animationData: bitCat,
    loop: true,
  };
  const { View } = useLottie(lottieOptions);

  const main = isLoading ? (
    <>
      <h2>Loading Meow...</h2>
      <div className="w-64 h-64">{View}</div>
    </>
  ) : (
    <GameBoard cats={cats} />
  );

  return (
    <main className="bg-jet w-screen h-screen overflow-hidden flex justify-center items-center flex-col">
      <div className="mb-3">
        <Logo />
      </div>
      {main}
    </main>
  );
}

export default App;
