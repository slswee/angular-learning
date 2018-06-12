import { Component, Input, Output, EventEmitter } from '@angular/core'

@Component({
  selector: 'event-thumbnail',
  template: `
<div>
    <h2>{{event.name}}</h2>
    <div>Date: {{event.date}}</div>
    <div>Time: {{event.time}}</div>
    <div>Price: \${{event.price}}</div>
      <div>
        <span>Address: {{event.location.address}}</span>
        <span>City: {{event.location.city}}</span>
        <span>Country: {{event.location.country}}</span>
      </div>
      <button class="btn btn-primary" (click)="handleClickMe()">Click Me!</button>
</div>
  `
})

export class EventThumbnailComponent {
  @Input() event:any  // The Input decorator tells Angular that the event variable will be passed in from another component
  @Output() eventClick = new EventEmitter()

  handleClickMe() {
    this.eventClick.emit('foo');
  }
}
