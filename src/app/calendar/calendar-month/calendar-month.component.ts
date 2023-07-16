import { Component, DoCheck, Input, OnChanges, OnInit } from '@angular/core';
import { CalendarEvent, CalendarService } from '../calendar.service';
import { Cell } from 'src/app/models/cell.model';
import { EventForm } from 'src/app/event-box/event-box.component';

@Component({
  selector: 'app-calendar-month',
  templateUrl: 'calendar-month.component.html',
  styleUrls: ['calendar-month.component.scss'],
})
export class CalendarMonthComponent implements OnChanges, OnInit {
  cells: Cell[] = [];
  selectedDay: number;
  events: CalendarEvent[] = [];
  @Input() date: Date;
  selectedMonth = 0;
  constructor(private calendarService: CalendarService) {}

  ngOnInit(): void {
    this.calendarService.events$.subscribe((events: CalendarEvent[]) => {
      this.events = events;
    });
  }
  ngOnChanges(): void {
    this.selectedDay = new Date(this.date).getDate();
    if (this.selectedMonth !== this.date.getMonth()) {
      const month = new Date(this.date).getMonth();
      const year = new Date(this.date).getFullYear();
      this.cells = this.calendarService.getCells(year, month);
    }
    this.selectedMonth = this.date.getMonth();
  }
  saveEvent(event: EventForm) {
    const e = {
      ...event,
      date: this.date,
    };
    console.log([...this.events, e]);
    this.calendarService.saveEvent([...this.events, e]);
  }
}
