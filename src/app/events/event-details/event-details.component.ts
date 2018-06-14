import { Component, OnInit } from '@angular/core';
import { EventService } from '../shared/event.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  // this component is going to be routed to directly, it's not a child component of another component, so we don't need a selector
  // we'll put the template in a separate file, so we need a template Url
  templateUrl: './event-details.component.html',
  styles: [`
    .container { padding-left: 20px; padding-right: 20px; }
    .event-image { height: 100px; }
  `]
})

export class EventDetailsComponent {
  event: any;
  constructor(private eventService: EventService, private route: ActivatedRoute) {

  }
  ngOnInit() {
    // this gives the parameters of of the current route that was used to access this component
    this.event = this.eventService.getEvent(+this.route.snapshot.params['id']);
  }
}
