import { Component } from '@angular/core';

@Component({
  selector: 'events-app',
  // templateUrl: './app.component.html',
  template: `
  <nav-bar></nav-bar>
  <router-outlet></router-outlet>
  `
  // styleUrls: ['./app.component.css']
})
export class EventsAppComponent {
  title = 'app';
}
