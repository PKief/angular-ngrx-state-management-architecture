import { createFeature, createReducer, on } from "@ngrx/store";
import { appActions } from "./app.actions";
import { initialAppState } from "./app.state";

export const appFeature = createFeature({
  name: "app",
  reducer: createReducer(
    initialAppState,

    on(appActions.setIsLoading, (state, { isLoading }) => ({
      ...state,
      isLoading,
    }))
  ),
});
