import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CalendarService } from '../calendar/calendar.service';

@Component({
  selector: 'app-event-box',
  templateUrl: './event-box.component.html',
  styleUrls: ['./event-box.component.scss'],
})
export class EventBoxComponent implements OnInit {
  startIsPM = false;
  endIsPM = false;
  expand = false;
  @Output() closeBox = new EventEmitter();
  @Output() saveEvent = new EventEmitter();
  intervals: any;
  form!: FormGroup;
  constructor(
    private fb: FormBuilder,
    private calendarService: CalendarService
  ) {}
  toggleStartIsPM() {
    this.startIsPM = !this.startIsPM;
  }
  toggleEndIsPM() {
    this.endIsPM = !this.endIsPM;
  }
  createForm() {
    this.form = this.fb.group({
      name: ['', Validators.required],
      startTime: ['', Validators.required],
      endTime: ['', Validators.required],
    });
  }
  ngOnInit(): void {
    this.createForm();
    this.intervals = this.calendarService.getTimeIntervals().map((x) => {
      const minutes = x.minutes.map((m) => {
        let str = m.toString();
        if (str.length < 2) {
          str = str + '0';
        }
        return str;
      });
      return {
        ...x,
        minutes,
      };
    });
  }
  save() {
    this.saveEvent.next(this.form.value);
    this.closeBox.emit();
  }
}
