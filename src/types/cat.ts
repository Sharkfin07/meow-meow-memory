export interface CatApiResponse {
  id: string;
  url: string;
  width: number;
  height: number;
  breeds: unknown;
  favourite: object;
}

export interface CardItem {
  id: string;
  image: string;
  name: string;
}

export interface GameState {
  currentScore: number;
  clickedIds: Record<string, number>;
}
