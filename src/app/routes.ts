import { Routes } from '@angular/router';
import {
  EventsListComponent,
  EventDetailsComponent,
  CreateEventComponent,
  EventRouteActivator,
  EventListResolver
} from './events/index';
import { Error404Component } from './error/404.component';

export const appRoutes: Routes = [
  // this path has to go first, otherwise Angular can't differenticate between events/new and events/:id
  { path: 'events/new', component: CreateEventComponent, canDeactivate: ['canDeactivateCreateEvent'] },
  // if the URL matches /events, show the EventsListComponent wherever the <router-outlet> component is
  // before resolving this route, call this event list resolver. and when that resolver finishes and returns some data,
  // add this data to the route as a property named events. So it's going to take the events returned from the resulver,
  // put that in the property named events in the route
  { path: 'events', component: EventsListComponent, resolve: {events: EventListResolver} },
  // :id is a parameter placeholder where we expect a value to be passed in on the route
  { path: 'events/:id', component: EventDetailsComponent, canActivate: [EventRouteActivator] },
  { path: '404', component: Error404Component },
  // when the path is empty or when at the root of the site, redirect to /events
  { path: '', redirectTo: '/events', pathMatch: 'full'},
  { path: 'user', loadChildren: 'app/user/user.module#UserModule' }

];
