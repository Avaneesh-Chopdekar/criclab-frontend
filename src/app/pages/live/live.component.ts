import { Component, OnInit } from '@angular/core';
import { ApiCallService } from '../../services/api-call.service';
import { MatchSummary } from '../../models/match-summary.model';
import { MatchCardComponent } from '../../components/match-card/match-card.component';

@Component({
  selector: 'app-live',
  imports: [MatchCardComponent],
  templateUrl: './live.component.html',
  styleUrl: './live.component.css',
})
export class LiveComponent implements OnInit {
  constructor(private _api: ApiCallService) {}

  matches: MatchSummary[] = [];
  loading = false;

  ngOnInit(): void {
    this.loadLiveMatches();
  }

  private loadLiveMatches() {
    this.loading = true;
    this._api.getLiveMatches().subscribe({
      next: (data: any) => {
        // console.log(data);
        this.matches = data;
        this.loading = false;
      },
      error: (error) => {
        console.log(error);
        this.loading = false;
      },
    });
  }

  refreshScore() {
    this.loadLiveMatches();
  }
}
