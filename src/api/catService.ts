import apiClient from "./apiClient";
import type { CatApiResponse, CardItem } from "../types/cat";

export const getCats = async (
  limit: number = 12,
  debug: boolean = false,
): Promise<CardItem[]> => {
  const response = await apiClient.get<CatApiResponse[]>("/images/search", {
    params: { limit },
  });

  if (debug) console.log("API response: ", response.data);

  return response.data.map((cat) => ({
    id: cat.id,
    image: cat.url,
    name: `Cat ${cat.id.slice(0, 4)}`,
  }));
};
