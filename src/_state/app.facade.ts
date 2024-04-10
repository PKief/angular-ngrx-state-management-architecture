import { Injectable, inject } from "@angular/core";
import { Store } from "@ngrx/store";
import { appActions } from "./app.actions";
import { appFeature } from "./app.reducer";
import { AppState } from "./app.state";

@Injectable({ providedIn: "root" })
export class AppFacade {
  private readonly store = inject<Store<AppState>>(Store);

  readonly isLoading$ = this.store.selectSignal(appFeature.selectIsLoading);

  setLoadingUserData(isLoading: boolean): void {
    this.store.dispatch(appActions.setIsLoading({ isLoading }));
  }
}
