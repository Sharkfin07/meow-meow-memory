import useGameManager from "../hooks/useGameManager";
import type { CardItem } from "../types/cat";
import Card from "./Card";

type GameBoardProps = {
  cats: CardItem[];
};

export default function GameBoard({ cats }: GameBoardProps) {
  const [game, cards, handleCardClick] = useGameManager(cats);

  return (
    <>
      <p className="text-white font-bold">Score: {game.currentScore}</p>
      <div className="flex flex-wrap gap-2">
        {cards.map((card) => {
          return (
            <button key={card.id} onClick={() => handleCardClick(card.id)}>
              <Card image={card.image} />
            </button>
          );
        })}
      </div>
    </>
  );
}
