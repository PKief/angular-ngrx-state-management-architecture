import { createFeature, createReducer, on } from "@ngrx/store";
import { entertainmentActions } from "./entertainment.actions";
import { initialEntertainmentState } from "./entertainment.state";

export const entertainmentFeature = createFeature({
  name: "entertainment",
  reducer: createReducer(
    initialEntertainmentState,
    on(entertainmentActions.loadRandomJoke, (state) => ({
      ...state,
      isLoading: true,
    })),
    on(entertainmentActions.loadRandomJokeSuccess, (state, { joke }) => ({
      ...state,
      jokes: [...state.jokes, joke],
      isLoading: false,
    })),
    on(entertainmentActions.loadRandomJokeFailure, (state, { error }) => ({
      ...state,
      error,
      isLoading: false,
    }))
  ),
});
