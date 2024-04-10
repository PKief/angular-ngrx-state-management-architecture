import { Joke } from "@shared";

export type EntertainmentState = {
  jokes: Joke[];
  isLoading: boolean;
  error: string;
};

export const initialEntertainmentState: EntertainmentState = {
  jokes: [],
  isLoading: false,
  error: "",
};
