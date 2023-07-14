import { Injectable } from '@angular/core';
import { BehaviorSubject, of as observableOf } from 'rxjs';
type CalendarEvent = {
  name: string;
  startTime: string;
  endTime: string;
  weekDayPair: string;
  date: Date;
};

@Injectable({
  providedIn: 'root',
})
export class CalendarService {
  private events = new BehaviorSubject<CalendarEvent[]>([]);
  events$ = this.events.asObservable();

  private selectedDate = new BehaviorSubject(new Date());
  selectedDate$ = this.selectedDate.asObservable();
  private showEventBox = new BehaviorSubject(false);
  showEventBox$ = this.showEventBox.asObservable();

  getCells(year: number, month: number) {
    const cells: any[] = [];
    const numberOfDays = this.daysInMonth(month, year);
    let dayPosition = new Date(year, month, 1).getDay();
    const pastDays = this.getPastDays(year, month, dayPosition);
    cells.push({ day: 1, index: dayPosition });

    dayPosition++;

    for (let index = 1; index < numberOfDays; index++) {
      if (dayPosition === 7) {
        dayPosition = 0;
      }

      cells.push({ day: index + 1, index: dayPosition });

      dayPosition++;
    }
    cells.unshift(...pastDays);
    let lasttDayIndex = new Date(year, month, numberOfDays).getDay();

    const futuretDays = this.getFutureDays(lasttDayIndex);
    cells.push(...futuretDays);
    if (cells.length < 42) {
      const celLength = cells.length;
      for (let index = 0; index < 42 - celLength; index++) {
        cells.push({ day: '', index: '', disabled: true });
      }
    }
    return cells;
  }
  getPastDays(year: number, month: number, firstDayIndex: number) {
    const pastDays: any = [];
    if (firstDayIndex === 0) return pastDays;

    const numberOfDays = this.daysInMonth(month - 1, year);

    let last = numberOfDays;

    let i = firstDayIndex - 1;
    for (let index = 0; index < firstDayIndex; index++) {
      pastDays.unshift({ day: last, index: i, disabled: true });

      last--;
      i--;
      if (i === -1) {
        break;
      }
    }
    return pastDays;
  }
  getFutureDays(lastDayIndex: number) {
    const futureDays: any = [];

    for (let index = 1; index < 6; index++) {
      lastDayIndex++;
      futureDays.push({ day: index, index: lastDayIndex, disabled: true });
    }
    return futureDays;
  }

  saveEvent(events: CalendarEvent[]) {
    this.events.next(events);
  }

  setNewDate(date: Date) {
    this.selectedDate.next(date);
  }
  onShowEventBox() {
    this.showEventBox.next(true);
  }
  onHideEventBox() {
    this.showEventBox.next(false);
  }
  daysInMonth(monthIndex: number, year: number) {
    return new Date(year, monthIndex + 1, 0).getDate();
  }
}