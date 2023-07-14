import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'calendar-app';
  constructor() {
    const day = new Date(2023, 6, 0).getDate();
    console.log(day);
  }
}
