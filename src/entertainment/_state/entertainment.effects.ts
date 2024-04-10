import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

@Injectable()
export class EntertainmentEffects {
  // loadRandomJoke$ = createEffect(() =>
  //   this.actions$.pipe(
  //     ofType(pdvcActions.showCreateRestrictionDialog),
  //     switchMap(() =>
  //       this.matDialog
  //         .open<RestrictionManagerDialogComponent, void, Restriction>(
  //           RestrictionManagerDialogComponent,
  //           { minWidth: '80%' }
  //         )
  //         .afterClosed()
  //         .pipe(filter(Boolean))
  //     )
  //   )
  // );
}
