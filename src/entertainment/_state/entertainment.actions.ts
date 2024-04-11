import { createActionGroup, emptyProps, props } from "@ngrx/store";
import { Joke } from "../../shared/models";

export const entertainmentActions = createActionGroup({
  source: "ENTERTAINMENT",
  events: {
    // Jokes
    loadRandomJoke: emptyProps(),
    loadRandomJokeSuccess: props<{ joke: Joke }>(),
    loadRandomJokeFailure: props<{ error: any }>(),
  },
});
