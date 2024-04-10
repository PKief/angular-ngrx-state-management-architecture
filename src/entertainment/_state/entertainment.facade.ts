import { Injectable, inject } from "@angular/core";
import { Store } from "@ngrx/store";
import { entertainmentActions } from "./entertainment.actions";
import { entertainmentFeature } from "./entertainment.reducer";
import { EntertainmentState } from "./entertainment.state";

@Injectable({ providedIn: "root" })
export class EntertainmentFacade {
  private readonly store = inject<Store<EntertainmentState>>(Store);

  readonly jokes$ = this.store.selectSignal(entertainmentFeature.selectJokes);
  readonly error$ = this.store.selectSignal(entertainmentFeature.selectError);
  readonly isLoading$ = this.store.selectSignal(
    entertainmentFeature.selectIsLoading
  );

  loadRandomJoke() {
    this.store.dispatch(entertainmentActions.loadRandomJoke());
  }
}
