import { Joke } from "../../shared/models";

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
