import { ChangeDetectionStrategy, Component } from "@angular/core";
import { LoadingSpinnerComponent } from "../../shared";
import { EntertainmentFacade } from "../_state/entertainment.facade";

@Component({
  selector: "app-entertainment",
  standalone: true,
  templateUrl: "./entertainment.component.html",
  styleUrl: "./entertainment.component.scss",
  imports: [LoadingSpinnerComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
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
