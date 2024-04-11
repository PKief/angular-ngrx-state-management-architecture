import { provideHttpClient } from "@angular/common/http";
import { ChangeDetectionStrategy, Component, isDevMode } from "@angular/core";
import { bootstrapApplication } from "@angular/platform-browser";
import {
  PreloadAllModules,
  RouterLink,
  RouterOutlet,
  provideRouter,
  withPreloading,
} from "@angular/router";
import { provideEffects } from "@ngrx/effects";
import { provideState, provideStore } from "@ngrx/store";
import { provideStoreDevtools } from "@ngrx/store-devtools";
import "zone.js";
import { AppEffects } from "./_state/app.effects";
import { appFeature } from "./_state/app.reducer";
import { APP_ROUTES } from "./app.routes";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<router-outlet />`,
})
export class App {}

bootstrapApplication(App, {
  providers: [
    provideStore(),
    provideState(appFeature),
    provideEffects([AppEffects]),
    provideHttpClient(),
    provideRouter(APP_ROUTES, withPreloading(PreloadAllModules)),
    provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() }),
  ],
});
