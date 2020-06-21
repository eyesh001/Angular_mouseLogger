import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MouseTrackZoneComponent } from './mouse-track-zone/mouse-track-zone.component';
import { MySpecialLoggerService, LOG_LEVEL_TOKEN } from './my-special-logger.service';
import { LogLevel } from './log-level.enum';
import { AnotherLoggerService } from './another-logger.service';

@NgModule({
  declarations: [
    AppComponent,
    MouseTrackZoneComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [MySpecialLoggerService, AnotherLoggerService, {provide:LOG_LEVEL_TOKEN, useValue:LogLevel.INFO}],
  bootstrap: [AppComponent]
})
export class AppModule { }
