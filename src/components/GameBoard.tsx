import useGameManager from "../hooks/useGameManager";
import type { CardItem } from "../types/cat";
import Card from "./Card";

type GameBoardProps = {
  cats: CardItem[];
};

export default function GameBoard({ cats }: GameBoardProps) {
  const [game, cards, handleCardClick] = useGameManager(cats);

  return (
    <section className="flex flex-col max-w-200 sm:max-h-[85vh] bg-linear-to-b from-orange-400 to-orange-500 py-6 px-4 sm:px-8 rounded-3xl border-4 border-amber-300 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
      {/* Header Area */}
      <div className="flex justify-between items-center border-b-2 border-orange-300/50 pb-4 mb-4 shrink-0">
        <div className="bg-jet px-4 sm:px-6 py-2 rounded-full border-2 border-amber-300 shadow-inner">
          <p className="text-amber-300 font-bold text-lg sm:text-xl font-bitcount-single">
            Score: {game.currentScore}
          </p>
        </div>
        <div className="text-right text-white drop-shadow-md">
          <h2 className="text-xl sm:text-2xl font-bold font-jersey tracking-wide">
            How to Play?
          </h2>
          <p className="text-xs sm:text-sm font-medium leading-tight max-w-37.5 sm:max-w-50">
            Click on a cat to earn points, but don't click on any cat more than
            once!
          </p>
        </div>
      </div>

      {/* Grid Container (Scrollable if height is too small, ensures 1 viewport height compatibility) */}
      <div className="flex-1 overflow-y-auto sm:overflow-hidden min-h-0 flex items-center justify-center -mx-2 px-2">
        <div className="grid grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4 w-full h-full max-h-full items-center content-center">
          {cards.map((card) => {
            return (
              <button
                key={card.id}
                onClick={() => handleCardClick(card.id)}
                className="relative w-full aspect-square outline-none focus-visible:ring-4 focus-visible:ring-white rounded-2xl"
              >
                <Card image={card.image} />
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
