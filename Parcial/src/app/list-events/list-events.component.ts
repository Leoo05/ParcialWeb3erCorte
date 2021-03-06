import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../app.reducer';
import { event } from '../models/event.model';

@Component({
  selector: 'app-list-events',
  templateUrl: './list-events.component.html',
  styleUrls: ['./list-events.component.css']
})
export class ListEventsComponent implements OnInit {
  eventos:event[]=[];
  index:number

  constructor(private store:Store<AppState>) {
    this.store.subscribe(events =>{ 
      this.eventos=events.event;
      this.index = events.index;
    });
  }

  ngOnInit(): void {}
}
