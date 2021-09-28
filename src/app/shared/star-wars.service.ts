import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { PeopleResponse } from "./start-wars-types";

@Injectable({
  providedIn: 'root'
})
export class StarWarsService {
  private readonly apiUrl = 'https://swapi.dev/api';

  constructor(private httpClient: HttpClient) { }

  public getPeople(): Observable<PeopleResponse> {
    return this.httpClient.get<PeopleResponse>(this.apiUrl + '/people');
  }
}
