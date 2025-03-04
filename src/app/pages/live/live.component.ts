import { Component, OnInit } from '@angular/core';
import { ApiCallService } from '../../services/api-call.service';
import { error } from 'console';

@Component({
  selector: 'app-live',
  imports: [],
  templateUrl: './live.component.html',
  styleUrl: './live.component.css',
})
export class LiveComponent implements OnInit {
  constructor(private _api: ApiCallService) {}

  ngOnInit(): void {
    this.loadLiveMatches();
  }

  private loadLiveMatches() {
    this._api.getLiveMatches().subscribe((_data) => {
      next: (data: any) => {
        console.log(data);
      };
      error: (error: Error) => {
        console.log(error);
      };
    });
  }
}
