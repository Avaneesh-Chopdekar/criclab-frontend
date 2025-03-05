import { Component, OnInit } from '@angular/core';
import { ApiCallService } from '../../services/api-call.service';
import { MatchSummary } from '../../models/match-summary.model';
import { MatchCardComponent } from '../../components/match-card/match-card.component';

@Component({
  selector: 'app-history',
  imports: [MatchCardComponent],
  templateUrl: './history.component.html',
  styleUrl: './history.component.css',
})
export class HistoryComponent implements OnInit {
  matches: MatchSummary[] = [];

  constructor(private _api: ApiCallService) {}

  ngOnInit() {
    this._api.getAllMatches().subscribe({
      next: (data: any) => {
        this.matches = data as MatchSummary[];
      },
      error: (err) => {
        console.log('Error fetching data', err);
      },
    });
  }
}
