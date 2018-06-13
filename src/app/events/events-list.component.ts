import { Component, OnInit } from '@angular/core';
import { EventService } from './shared/event.service';
import { ToastrService } from '../common/toastr.service';

@Component({
  template:
  `
  <div>
    <h1>Upcoming Angular Events</h1>
    <hr/>
    <div class="row">
      <div *ngFor="let event of events" class="col-md-5">
        <event-thumbnail (click)="handleThumbnailClick(event.name)" [event]="event"></event-thumbnail>
      </div>
    </div>
  </div>
  `
  // to pass the event information, 'event1' matches a member in this component
})
export class EventsListComponent implements OnInit {
  events: any[];
  // inject event list service
  constructor(private eventService: EventService, private toastr: ToastrService) {

  }

  ngOnInit() {
    this.events = this.eventService.getEvents();
  }

  handleThumbnailClick(eventName) {
    this.toastr.success(eventName);  // using the injected toastr service here
  }
}
