import { createActionGroup, props } from "@ngrx/store";

export const appActions = createActionGroup({
  source: "APP",
  events: {
    setIsLoading: props<{ isLoading: boolean }>(),
  },
});
