import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup } from '@angular/forms';
import { EventService } from './shared/index';

@Component({
  templateUrl: 'create-event.component.html',
  styles: [`
  em {float: right; color: #05C65; padding-left: 10px;}
  .error input {background-color:#E3C3C5;}
  .error ::-webkit-input-placeholder { color: #999; }
  .error ::-moz-placeholder { color: #999; }
  .error :-moz-placeholder { color: #999; }
  .error :ms-input-placeholder { color: #999; }
`]
})

export class CreateEventComponent {
  newEvent;
  newEventForm;
  isDirty = true;
  constructor(private router: Router, private eventService: EventService) {

  }

  saveEvent(formValues) {
    this.eventService.saveEvent(formValues);
  }

  cancel() {
    // inject Angular's router service
    // call navigate() on the router and inject the path to navigate to
    this.router.navigate(['/events']);
  }
}
