import { Component } from '@angular/core'

@Component({
  selector: 'events-list',
  template:
  `
  <div>
    <h1>Upcoming Angular Events</h1>
    <hr/>
    <event-thumbnail (eventClick)="handleEventClicked($event)" [event]="event1"></event-thumbnail>
  </div>
  `
  // to pass the event information, 'event1' matches a member in this component
})
export class EventsListComponent {
  event1 = {
    id: 1,
    name: 'Angular Connect',
    date: '10/12/2018',
    time: '10:00 am',
    price: 599.99,
    imageUrl: '/assets/images/angularcopnnect-shield.png',
    location: {
      address: '5001',
      city: 'Ninjago City',
      country: 'Ninjago'
    }
  };

  handleEventClicked() {
    console.log(this.event1.name);
  }
}
