import { Component, OnInit } from '@angular/core';
import { MatchService } from '../../services/match.service';
import { MatchSummary } from '../../models/match-summary.model';
import { MatchCardComponent } from '../../components/match-card/match-card.component';

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
  private intervalId: any;

  ngOnInit(): void {
    this.loading = true;
    this.loadLiveMatches();

    // Poll every 5 seconds (5000 ms)
    this.intervalId = setInterval(() => {
      this.loadLiveMatches();
    }, 5000);
  }

  ngOnDestroy(): void {
    // Clear the interval to avoid memory leaks
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
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
