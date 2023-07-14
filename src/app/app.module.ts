import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CalendarModule } from './calendar/calendar.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CalendarService } from './calendar/calendar.service';
import { MaterialModule } from './material.module';
import { MatNativeDateModule } from '@angular/material/core';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CalendarModule,
    NgbModule,
    MatNativeDateModule,
    MaterialModule,
  ],
  providers: [CalendarService],
  bootstrap: [AppComponent],
})
export class AppModule {}
