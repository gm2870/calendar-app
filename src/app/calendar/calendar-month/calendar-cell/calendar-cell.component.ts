import {
  Component,
  EventEmitter,
  Input,
  Output,
  ViewEncapsulation,
} from '@angular/core';
import { CalendarEvent, CalendarService } from '../../calendar.service';
import { Cell } from 'src/app/models/cell.model';
import { EventForm } from 'src/app/event-box/event-box.component';

@Component({
  selector: 'app-calendar-cell',
  templateUrl: 'calendar-cell.component.html',
  styleUrls: ['calendar-cell.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class CalendarCellComponent {
  events: CalendarEvent[] = [];
  isOpen = false;
  @Input() cell: Cell;
  @Input() selectedDay: number;
  @Output() shouldSaveEvent = new EventEmitter<EventForm>();
  constructor(private calendarService: CalendarService) {}
  ngOnInit(): void {
    this.calendarService.events$.subscribe((events: CalendarEvent[]) => {
      if (this.cell.disabled) return;
      this.events = events.filter((e) => e.date.getDate() === this.cell.day);
    });
  }

  saveEvent(event: EventForm) {
    this.shouldSaveEvent.emit(event);
  }
  onCellClick() {
    if (this.cell.disabled) return;
    this.isOpen = true;
  }
}
