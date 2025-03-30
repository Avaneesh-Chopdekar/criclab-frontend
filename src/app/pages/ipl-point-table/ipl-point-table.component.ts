import { Component } from '@angular/core';
import { MatchService } from '../../services/match.service';

@Component({
  selector: 'app-ipl-point-table',
  imports: [],
  templateUrl: './ipl-point-table.component.html',
  styleUrl: './ipl-point-table.component.css',
})
export class IplPointTableComponent {
  pointTable: Array<Array<string>> = [];

  constructor(private _api: MatchService) {}

  ngOnInit(): void {
    this._api.getIPLPointTable().subscribe({
      next: (data: any) => {
        // console.log(data);
        this.pointTable = data;
      },
      error: (error) => {
        console.log(error);
      },
    });
  }
}
