import { Component, OnInit } from '@angular/core';
import { MatchService } from '../../services/match.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-point-table',
  imports: [CommonModule],
  templateUrl: './point-table.component.html',
  styleUrl: './point-table.component.css',
})
export class PointTableComponent implements OnInit {
  groupBTable: Array<Array<string>> = [];
  groupATable: Array<Array<string>> = [];

  constructor(private _api: MatchService) {}

  ngOnInit(): void {
    this._api.getPointTable().subscribe({
      next: (data: any) => {
        // console.log(data);
        this.groupBTable = data.slice(0, 5);
        this.groupATable = data.slice(5, 10);
      },
      error: (error) => {
        console.log(error);
      },
    });
  }
}
