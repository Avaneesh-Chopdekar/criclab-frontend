import { Component, Input } from '@angular/core';
import { MatchSummary } from '../../models/match-summary.model';
import { MatchService } from '../../services/match.service';

@Component({
  selector: 'app-match-card',
  imports: [],
  templateUrl: './match-card.component.html',
  styleUrl: './match-card.component.css',
})
export class MatchCardComponent {
  @Input()
  match!: MatchSummary;

  @Input()
  loading: boolean = false;

  @Input()
  controls: boolean = false;

  constructor(private _api: MatchService) {}

  hideMatch(id: number) {
    this._api.softDelete(id).subscribe({
      next: () => {
        console.log('Match hidden with id:' + id);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
  deleteMatch(id: number) {
    this._api.hardDelete(id).subscribe({
      next: () => {
        console.log('Match deleted with id:' + id);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
