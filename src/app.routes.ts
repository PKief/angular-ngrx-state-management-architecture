export const APP_ROUTES = [
  {
    path: "entertainment",
    loadChildren: () =>
      import("./entertainment/entertainment.routes").then(
        (m) => m.ENTERTAINMENT_ROUTES
      ),
  },
];
