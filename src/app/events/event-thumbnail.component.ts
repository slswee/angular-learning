import { Component, Input, EventEmitter } from '@angular/core';
import { IEvent } from './shared/index';

@Component({
  selector: 'event-thumbnail',
  template: `
<div [routerLink]="['/events', event.id]" class="well hoverwell thumbnail">
    <h2>{{event?.name}}</h2>
    <div>Date: {{event?.date}}</div>
    <div [ngStyle]="getStartTimeStyle()" [ngClass]="getStartTimeClass()" [ngSwitch]="event?.time">Time: {{event.time}}
      <span *ngSwitchCase="'8:00 am'">(Early Start)</span>
      <span *ngSwitchCase="'10:00 am'">(Late Start)</span>
      <span *ngSwitchDefault>(Normal Start)</span>
    </div>
    <div>Price: \${{event.price}}</div>
      <div *ngIf="event?.location">
        <span>Location: {{event?.location.address}}</span>
        <span class="pad-left">City: {{event.location.city}}</span>
        <span>Country: {{event.location.country}}</span>
      </div>
      <div *ngIf="event?.onlineUrl">
        Online Url: {{event?.onlineUrl}}
      </div>
</div>
  `,
  styles: [`
    .green { color: #003300 !important; }
    .bold { font-weight: bold; }
    .thumbnail { min-height: 210px; }
    .pad-left: { margin-left: 10px; }
    .well div { color: #bbb; }
  `]
})

export class EventThumbnailComponent {
  @Input() event: IEvent;  // The Input decorator tells Angular that the event variable will be passed in from another component
  getStartTimeClass() {
    // const isEarlyStart = this.event && this.event.time === '8:00 am';
    // return {green: isEarlyStart, bold: isEarlyStart};
    if (this.event && this.event.time === '8:00 am')
      return 'green bold'; //['green', 'bold']
    return '';  //[]
  }
  getStartTimeStyle():any {
    if (this.event && this.event.time === '8:00 am')
      return {color: '#003300', 'font-weight': 'bold'};
    return {};
  }

  logFoo() {
    console.log('foo');
  }
}
