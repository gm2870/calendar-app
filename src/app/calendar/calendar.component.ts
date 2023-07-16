import { Component, OnInit } from '@angular/core';
import { CalendarService } from './calendar.service';

@Component({
  selector: 'app-calendar',
  templateUrl: 'calendar.component.html',
  styleUrls: ['calendar.component.scss'],
})
export class CalendarComponent implements OnInit {
  selected: Date;
  selectedDate = {
    year: 2023,
    month: 6,
    day: 23,
  };
  constructor(private calendarService: CalendarService) {}
  ngOnInit(): void {
    this.selected = new Date();
  }
}
