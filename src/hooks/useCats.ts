import { useCallback, useEffect, useState } from "react";
import type { CardItem } from "../types/cat";
import { getCats } from "../api/catService";
import shuffleArray from "../utils/arrayShuffler";

function useCats(): [CardItem[], () => void] {
  // States
  const [cats, setCats] = useState<CardItem[]>([]);

  // State Effects
  useEffect(() => {
    let mounted = true;
    const loadData = async () => {
      try {
        const data = await getCats(12);
        if (mounted) setCats(data);
      } catch (error) {
        console.error(error);
      }
    };
    loadData();
    return () => {
      mounted = false;
    };
  }, []);

  // Functions
  const shuffleCats = useCallback((): void => {
    setCats((prev) => shuffleArray<CardItem>([...prev]));
  }, []);

  return [cats, shuffleCats];
}

export default useCats;
