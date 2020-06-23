import { Component, OnInit, Host, Optional, ViewEncapsulation } from '@angular/core';
import { LogLevel } from '../log-level.enum';
import { MySpecialLoggerService, LOG_LEVEL_TOKEN } from '../my-special-logger.service';
import { LoggerService } from '../logger-service';
import { AnotherLoggerService } from '../another-logger.service';

@Component({
  selector: 'mpl-mouse-track-zone',
  templateUrl: './mouse-track-zone.component.html',
  styleUrls: ['./mouse-track-zone.component.css'],
  providers: [MySpecialLoggerService, {provide:LOG_LEVEL_TOKEN, useValue: LogLevel.DEBUG}],
  // encapsulation: ViewEncapsulation.Native
})
export class MouseTrackZoneComponent implements OnInit {
  logger: LoggerService;

  constructor(@Host() @Optional() mySpecialLoggerService:MySpecialLoggerService, 
  anotherLogger: AnotherLoggerService) { 
    this.logger = mySpecialLoggerService ? mySpecialLoggerService : anotherLogger;
  }

  ngOnInit() {
  }

  captureMousePos($event: MouseEvent){
    this.logger.debug('click event occured');
    const pos = [$event.clientX, $event.clientY];
    this.logger.info(`x:${pos[0]} y:${pos[1]}`);
  }
}
