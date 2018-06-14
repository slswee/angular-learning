import { Routes } from '@angular/router';
import { EventsListComponent } from './events/events-list.component';
import { EventDetailsComponent } from './events/event-details/event-details.component';
import { CreateEventComponent } from './events/shared/create-event.component';
import { Error404Component } from './error/404.component';
import { EventRouteActivator } from './events/event-details/event-route-activator.service';
import { EventListResolver } from './events/events-list-resolver.service';

export const appRoutes: Routes = [
  // this path has to go first, otherwise Angular can't differenticate between events/new and events/:id
  { path: 'events/new', component: CreateEventComponent, canDeactivate: ['canDeactivateCreateEvent'] },
  // if the URL matches /events, show the EventsListComponent wherever the <router-outlet> component is
  { path: 'events', component: EventsListComponent, resolve: { events:EventListResolver } },
  // :id is a parameter placeholder where we expect a value to be passed in on the route
  { path: 'events/:id', component: EventDetailsComponent, canActivate: [EventRouteActivator] },
  { path: '404', component: Error404Component },
  // when the path is empty or when at the root of the site, redirect to /events
  { path: '', redirectTo: '/events', pathMatch: 'full'}

];
