import { NgModule } from '@angular/core';
import { CalendarComponent } from './calendar.component';
import { CalendarMonthComponent } from './calendar-month/calendar-month.component';
import { CalendarMonthHeaderComponent } from './calendar-month/calendar-month-header/calendar-month-header.component';
import { CalendarCellComponent } from './calendar-month/calendar-cell/calendar-cell.component';
import { BrowserModule } from '@angular/platform-browser';
import { MatNativeDateModule } from '@angular/material/core';
import { MaterialModule } from '../material.module';
import { EventBoxDirective } from '../calendar.directive';
import { EventBoxComponent } from '../event-box/event-box.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    CalendarComponent,
    CalendarMonthComponent,
    CalendarMonthHeaderComponent,
    CalendarCellComponent,
    EventBoxDirective,
    EventBoxComponent,
  ],
  imports: [
    BrowserModule,
    MatNativeDateModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    CalendarComponent,
    CalendarMonthComponent,
    CalendarMonthHeaderComponent,
  ],
  providers: [],
})
export class CalendarModule {}
