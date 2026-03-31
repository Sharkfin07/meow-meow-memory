export interface CatImageResponse {
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
  bestScore: number;
  clickedIds: CardCounter[];
}

export interface CardCounter {
  id: string;
  count: number;
}
