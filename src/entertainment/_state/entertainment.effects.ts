import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, of, switchMap } from "rxjs";
import { EntertainmentService } from "../services";
import { entertainmentActions } from "./entertainment.actions";

@Injectable()
export class EntertainmentEffects {
  addNewJokeToTheList$ = createEffect(() =>
    this.actions$.pipe(
      ofType(entertainmentActions.loadRandomJoke),
      switchMap(() =>
        this.entertainmentService.loadRandomJoke().pipe(
          map((joke) => entertainmentActions.loadRandomJokeSuccess({ joke })),
          catchError((error) =>
            of(entertainmentActions.loadRandomJokeFailure({ error }))
          )
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private entertainmentService: EntertainmentService
  ) {}
}
