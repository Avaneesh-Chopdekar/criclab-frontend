import { Component, OnInit } from '@angular/core';
import { ApiCallService } from '../../services/api-call.service';
import { MatchSummary } from '../../models/match-summary.model';
import { MatchCardComponent } from '../../components/match-card/match-card.component';
import { debounceTime, Subject } from 'rxjs';

@Component({
  selector: 'app-history',
  imports: [MatchCardComponent],
  templateUrl: './history.component.html',
  styleUrl: './history.component.css',
})
export class HistoryComponent implements OnInit {
  loading = false;
  matches: MatchSummary[] = [];
  filteredMatches: MatchSummary[] = [];
  searchTerm = new Subject<string>(); // RxJS Subject for debouncing

  constructor(private _api: ApiCallService) {}

  ngOnInit() {
    this.loading = true;
    this._api.getAllMatches().subscribe({
      next: (data: any) => {
        this.matches = data as MatchSummary[];
        this.filteredMatches = this.matches;
        this.loading = false;
      },
      error: (err) => {
        console.log('Error fetching data', err);
        this.loading = false;
      },
    });

    // Handle debounced search
    this.searchTerm.pipe(debounceTime(1000)).subscribe((term) => {
      this.filterMatches(term);
    });
  }

  onSearch(event: Event) {
    const target = event.target as HTMLInputElement;
    this.searchTerm.next(target.value); // Emit search term
  }

  private filterMatches(term: string) {
    this.filteredMatches = this.matches.filter((match) =>
      match.teamHeading.toLowerCase().includes(term.toLowerCase())
    );
  }
}
