import { Component } from "@angular/core";
import { EntertainmentFacade } from "../_state/entertainment.facade";

@Component({
  selector: "app-entertainment",
  standalone: true,
  templateUrl: "./entertainment.component.html",
  styleUrl: "./entertainment.component.scss",
})
export class EntertainmentComponent {
  readonly jokes$ = this.entertainmentFacade.jokes$;
  readonly error$ = this.entertainmentFacade.error$;
  readonly isLoading$ = this.entertainmentFacade.isLoading$;

  constructor(private entertainmentFacade: EntertainmentFacade) {}

  tellJoke() {
    this.entertainmentFacade.loadRandomJoke();
  }
}
