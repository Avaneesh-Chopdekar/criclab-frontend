import { Component, OnInit } from '@angular/core';
import { MatchService } from '../../services/match.service';
import { MatchSummary } from '../../models/match-summary.model';
import { MatchCardComponent } from '../../components/match-card/match-card.component';
import { interval } from 'rxjs';

@Component({
  selector: 'app-live',
  imports: [MatchCardComponent],
  templateUrl: './live.component.html',
  styleUrl: './live.component.css',
})
export class LiveComponent implements OnInit {
  constructor(private _api: MatchService) {}

  matches: MatchSummary[] = [];
  loading = false;

  ngOnInit(): void {
    this.loading = true;
    this.loadLiveMatches();

    this.refreshLiveMatches();
  }

  private refreshLiveMatches() {
    interval(5000).subscribe(() => this.loadLiveMatches());
  }

  private loadLiveMatches() {
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
    this.loading = true;
    this.loadLiveMatches();
  }
}
