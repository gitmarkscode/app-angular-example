import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

const KEY = "42b3e60b6636f50062f6d3579100d83f";
const ROOT_URL = "https://api.themoviedb.org/3/";

@Injectable({
  providedIn: "root"
})
export class TmdbApi {
  constructor(private _http: HttpClient) {}

  getCastMembersList(query: string): Observable<any> {
    const API_URL = `${ROOT_URL}search/person?api_key=${KEY}&query=${query}`;

    return this._http.get(API_URL);
  }

  getCastMemberById(id: string): Observable<any> {
    const API_URL = `${ROOT_URL}person/${id}?api_key=${KEY}&append_to_response=credits&sort_by=release_date.asc`;

    return this._http.get(API_URL);
  }
}
