import { Component, Input } from '@angular/core';
import { MatchSummary } from '../../models/match-summary.model';

@Component({
  selector: 'app-match-card',
  imports: [],
  templateUrl: './match-card.component.html',
  styleUrl: './match-card.component.css',
})
export class MatchCardComponent {
  @Input()
  match!: MatchSummary;
}
