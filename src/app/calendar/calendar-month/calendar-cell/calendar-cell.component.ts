import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CalendarService } from '../../calendar.service';

@Component({
  selector: 'app-calendar-cell',
  templateUrl: 'calendar-cell.component.html',
  styleUrls: ['calendar-cell.component.scss'],
})
export class CalendarCellComponent {
  @Input() cell: any;
  events: any;
  @Input() selectedDay: number;
  @Output() onCellClick = new EventEmitter();

  constructor(private calendarService: CalendarService) {}

  ngOnInit(): void {}

  showEventBox() {
    this.onCellClick.emit(this.cell.day);
    this.calendarService.onShowEventBox();
  }
}
