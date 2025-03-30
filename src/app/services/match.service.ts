import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class MatchService {
  constructor(private _httpClient: HttpClient) {}

  /**
   * Retrieves a list of all active matches from the API.
   *
   * @returns An HTTP request observable that resolves to a list of match summaries.
   */
  getAllActiveMatches() {
    return this._httpClient.get(`${environment.API_URL}/matches/active`);
  }

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
    return this._httpClient.get(
      `${environment.API_URL}/matches/ict-point-table`
    );
  }

  /**
   * Soft deletes a match by its ID.
   *
   * @param id The match ID to soft delete.
   *
   * @returns An HTTP request observable that resolves to the deleted match data.
   */
  softDelete(id: number) {
    return this._httpClient.delete(
      `${environment.API_URL}/matches/${id}/soft-delete`,
      {
        headers: {
          Authorization: 'Bearer ' + localStorage.getItem('accessToken'),
        },
      }
    );
  }

  /**
   * Deletes a match by its ID.
   *
   * @param id The match ID to delete.
   *
   * @returns An HTTP request observable that resolves to the deleted match data.
   */
  hardDelete(id: number) {
    return this._httpClient.delete(
      `${environment.API_URL}/matches/${id}/delete`,
      {
        headers: {
          Authorization: 'Bearer ' + localStorage.getItem('accessToken'),
        },
      }
    );
  }
}
