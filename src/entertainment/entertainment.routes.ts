import { Routes } from "@angular/router";
import { provideEffects } from "@ngrx/effects";
import { provideState } from "@ngrx/store";
import { EntertainmentEffects } from "./_state/entertainment.effects";
import { entertainmentFeature } from "./_state/entertainment.reducer";
import { EntertainmentComponent } from "./components/entertainment.component";

export const ENTERTAINMENT_ROUTES: Routes = [
  {
    path: "",
    component: EntertainmentComponent,
    providers: [
      provideState(entertainmentFeature),
      provideEffects([EntertainmentEffects]),
    ],
  },
];
