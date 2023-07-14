import {
  Component,
  ElementRef,
  EventEmitter,
  HostListener,
  Input,
  Output,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';
import { CalendarService } from '../../calendar.service';

@Component({
  selector: 'app-calendar-cell',
  templateUrl: 'calendar-cell.component.html',
  styleUrls: ['calendar-cell.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class CalendarCellComponent {
  @Input() cell: any;
  events: any;
  @Input() selectedDay: number;
  @Output() onCellClick = new EventEmitter();
  showEventBox: boolean;
  @ViewChild('eventContainer') eventContainer: ElementRef;
  constructor(private calendarService: CalendarService) {}

  ngOnInit(): void {}

  showEventBoxHandler() {
    this.showEventBox = true;
  }
  saveEvent(event: any) {
    console.log(event);
  }
}
