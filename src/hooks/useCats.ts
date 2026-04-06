import { useEffect, useState } from "react";
import type { CardItem } from "../types/cat";
import { getCats } from "../api/catService";

function useCats(): [CardItem[], boolean] {
  // States
  const [cats, setCats] = useState<CardItem[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  // State Effects
  useEffect(() => {
    let mounted = true;
    const loadData = async () => {
      try {
        const data = await getCats(12, true);
        if (mounted) setCats(data);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };
    loadData();
    return () => {
      mounted = false;
    };
  }, []);

  return [cats, isLoading];
}

export default useCats;
