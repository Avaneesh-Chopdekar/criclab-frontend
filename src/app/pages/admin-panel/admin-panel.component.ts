import { Component, OnInit } from '@angular/core';
import { MatchSummary } from '../../models/match-summary.model';
import { debounceTime, Subject } from 'rxjs';
import { MatchService } from '../../services/match.service';
import { MatchCardComponent } from '../../components/match-card/match-card.component';
import { TokenService } from '../../services/token.service';

@Component({
  selector: 'app-admin-panel',
  imports: [MatchCardComponent],
  templateUrl: './admin-panel.component.html',
  styleUrl: './admin-panel.component.css',
})
export class AdminPanelComponent implements OnInit {
  loading = false;
  matches: MatchSummary[] = [];
  filteredMatches: MatchSummary[] = [];
  searchTerm = new Subject<string>();

  constructor(private _api: MatchService) {}

  ngOnInit(): void {
    this.loadMatches();

    this.searchTerm.pipe(debounceTime(1000)).subscribe((term) => {
      this.filterMatches(term);
    });
  }

  refreshScore() {
    this.loadMatches();

    this.searchTerm.pipe(debounceTime(1000)).subscribe((term) => {
      this.filterMatches(term);
    });
  }

  private loadMatches() {
    this.loading = true;
    this._api.getAllActiveMatches().subscribe({
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
