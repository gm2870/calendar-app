import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CalendarService, EventTime } from '../calendar/calendar.service';

export type EventForm = {
  name: string;
  startTime: EventTime;
  endTime: EventTime;
};

@Component({
  selector: 'app-event-box',
  templateUrl: './event-box.component.html',
  styleUrls: ['./event-box.component.scss'],
})
export class EventBoxComponent implements OnInit {
  startIsPM = false;
  endIsPM = false;
  expand = false;
  intervals: { minutes: string[]; hour: number; type: string }[] = [];
  @Output() closeBox = new EventEmitter();
  @Output() saveEvent = new EventEmitter<EventForm>();
  @ViewChild('endTimeInput') endTimeInput: ElementRef;
  @ViewChild('startTimeInput') startTimeInput: ElementRef;
  form!: FormGroup;
  constructor(
    private fb: FormBuilder,
    private calendarService: CalendarService
  ) {}

  createForm() {
    this.form = this.fb.group({
      name: ['', Validators.required],
      startTime: ['', Validators.required],
      endTime: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.createForm();
    this.intervals = this.calendarService.getTimeIntervals();
  }

  endTimeChanged(value: EventTime) {
    this.endTimeInput.nativeElement.value = `${value.hour}:${
      value.minute
    } ${value.type.toUpperCase()}`;
  }

  startTimeChanged(value: EventTime) {
    this.startTimeInput.nativeElement.value = `${value.hour}:${
      value.minute
    } ${value.type.toUpperCase()}`;
  }

  save() {
    const event: EventForm = this.form.getRawValue();
    event.startTime.minute = Number(event.startTime.minute);
    event.endTime.minute = Number(event.endTime.minute);
    this.saveEvent.next(event);
    this.closeBox.emit();
  }
}
