import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { Suggestion } from "../model/suggestion";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { catchError, map } from "rxjs/operators";

@Injectable()
export class AutocompleteService {
  private API_SUGGESTION_URL =
    "http://localhost:4200/weather/api/autocomplete/cities";

  constructor(private httpClient: HttpClient) {}

  getCities(hint: string): Observable<Suggestion[]> {
    return this.httpClient
      .get<Suggestion[]>(`${this.API_SUGGESTION_URL}?hint=${hint}`)
      .pipe(
        handleSuggestions,
        catchError(handleNotFound),
        catchError(returnErrorResponseAndLog)
      );
  }
}

const handleSuggestions = map((res: Suggestion[]) =>
  !res.length ? emptyResponse : res
);

const returnErrorResponseAndLog = (err: any) => {
  console.log(err);
  return of(errorResponse);
};

const handleNotFound = (err: HttpErrorResponse) => {
  if (err.status === 404) {
    return of(emptyResponse);
  }
  throw err;
};

const errorResponse: Suggestion[] = [
  {
    id: "EMPTY",
    name: "Error al buscar, intente nuevamente.",
  },
];

const emptyResponse: Suggestion[] = [
  {
    id: "EMPTY",
    name: "Sin resultados.",
  },
];
