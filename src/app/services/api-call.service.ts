import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class ApiCallService {
  constructor(private _httpClient: HttpClient) {}

  /**
   * Retrieves a list of all matches from the API.
   *
   * @returns An HTTP request observable that resolves to a list of match summaries.
   */
  getAllMatches() {
    return this._httpClient.get(`${environment.API_URL}/matches`);
  }

  /**
   * Retrieves a list of live matches from the API.
   *
   * @returns An HTTP request observable that resolves to a list of match summaries.
   */
  getLiveMatches() {
    return this._httpClient.get(`${environment.API_URL}/matches/live`);
  }

  /**
   * Retrieves the points table for all teams in the tournament.
   *
   * @returns An HTTP request observable that resolves to a list of team standings.
   */
  getPointTable() {
    return this._httpClient.get(`${environment.API_URL}/matches/point-table`);
  }
}
