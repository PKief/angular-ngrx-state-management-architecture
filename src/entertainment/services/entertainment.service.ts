import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Joke } from "@shared";
import { Quote } from "../../../projects/shared/src/public-api";

@Injectable({ providedIn: "root" })
export class EntertainmentService {
  constructor(private http: HttpClient) {}

  loadRandomJoke() {
    return this.http.get<Joke>("https://api.chucknorris.io/jokes/random");
  }

  loadJokeByCategory(category: string) {
    return this.http.get<Joke>(
      `https://api.chucknorris.io/jokes/random?category=${category}`
    );
  }

  loadRandomQuote() {
    return this.http.get<Quote>("https://api.quotable.io/random");
  }
}
