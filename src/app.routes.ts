import { Route } from "@angular/router";

export const APP_ROUTES: Route[] = [
  {
    path: "",
    redirectTo: "entertainment",
    pathMatch: "full",
  },
  {
    path: "entertainment",
    loadChildren: () =>
      import("./entertainment/entertainment.routes").then(
        (m) => m.ENTERTAINMENT_ROUTES
      ),
  },
];
