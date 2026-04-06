import { useState } from "react";
import type { CardItem, GameState } from "../types/cat";
import shuffleArray from "../utils/arrayShuffler";

function useGameManager(
  initialCats: CardItem[],
): [GameState, CardItem[], (cardId: string) => void] {
  const [game, setGame] = useState<GameState>(() => {
    const initialClickedIds: Record<string, number> = {};
    initialCats.forEach((cat) => {
      initialClickedIds[cat.id] = 0;
    });

    return {
      currentScore: 0,
      clickedIds: initialClickedIds,
    };
  });

  const [cards, setCards] = useState(initialCats);
  const [prevInitialCats, setPrevInitialCats] = useState(initialCats);

  if (initialCats !== prevInitialCats) {
    setPrevInitialCats(initialCats);
    setCards(initialCats);

    const initialClickedIds: Record<string, number> = {};
    initialCats.forEach((cat) => {
      initialClickedIds[cat.id] = 0;
    });
    setGame((prev) => ({ ...prev, clickedIds: initialClickedIds }));
  }

  const increment = (clickedId: string) => {
    const newClickedIds = {
      ...game.clickedIds,
    };
    newClickedIds[clickedId]++;

    setGame((prev) => ({
      currentScore: prev.currentScore + 1,
      clickedIds: newClickedIds,
    }));
  };

  const reset = () => {
    const initialClickedIds: Record<string, number> = {};
    initialCats.forEach((cat) => {
      initialClickedIds[cat.id] = 0;
    });

    setGame({
      currentScore: 0,
      clickedIds: initialClickedIds,
    });
  };

  const handleCardClick = (cardId: string): void => {
    if (game.clickedIds[cardId] < 1) {
      increment(cardId);
    } else {
      reset();
    }

    setCards((prev) => shuffleArray(prev));
  };

  return [game, cards, handleCardClick];
}

export default useGameManager;
