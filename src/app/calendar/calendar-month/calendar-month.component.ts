import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { CalendarService } from '../calendar.service';
import { Observable } from 'rxjs';
type CalendarEvent = {
  name: string;
  startTime: string;
  endTime: string;
  weekDayPair: string;
  date: Date;
};
type FormEvent = {
  name: string;
  startTime: string;
  endTime: string;
};
@Component({
  selector: 'app-calendar-month',
  templateUrl: 'calendar-month.component.html',
  styleUrls: ['calendar-month.component.scss'],
})
export class CalendarMonthComponent implements OnInit, OnChanges {
  cells: any[] = [];
  weekDayPair: any;
  selectedDay: number;
  selectedDate: Date;
  showEventBox$: Observable<boolean>;
  events: CalendarEvent[] = [];
  @Input() date: Date;
  constructor(private calendarService: CalendarService) {}
  ngOnInit(): void {}
  ngOnChanges(): void {
    this.selectedDay = new Date(this.date).getDate();

    const month = new Date(this.date).getMonth();
    const year = new Date(this.date).getFullYear();

    this.cells = this.calendarService.getCells(year, month);
  }
}
