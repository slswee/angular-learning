import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import {EventService } from './shared/event.service';

@Injectable()
export class EventListResolver implements Resolve<any> {
  constructor(private eventService: EventService) {

  }
  // in the resolve method, we typically make an asynchronize call, and when it returns, we'll return that data
  resolve() {
    // getEvents() returns an observable. calling map() on that observable gives us access to the events that are passed in on that stream
    return this.eventService.getEvents().map(events => events);
  }
}
