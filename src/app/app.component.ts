import { Component } from '@angular/core';
import { MySpecialLoggerService } from './my-special-logger.service';
import { LogLevel } from './log-level.enum';

@Component({
  selector: 'mpl-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mpl work!';

  constructor(private logger: MySpecialLoggerService){
    this.testLoggerLevel();
  }

  printDebugLog(){
    this.logger.debug("test dependency injector tree!");
  }

  testLoggerLevel(){
    console.log('============Default(Info) Log Level===========');
    this.logger.debug("test Logging... in debug");
    this.logger.info("test Logging... in info");
    this.logger.warn("test Logging... in warn");
    this.logger.error("test Logging... in error");

    this.logger.logLevel = LogLevel.DEBUG;
    console.log('============Debug Log Level===========');
    this.logger.debug("test Logging... in debug");
    this.logger.info("test Logging... in info");
    this.logger.warn("test Logging... in warn");
    this.logger.error("test Logging... in error");

    this.logger.logLevel = LogLevel.WARN;
    console.log('============Info Log Level===========');
    this.logger.debug("test Logging... in debug");
    this.logger.info("test Logging... in info");
    this.logger.warn("test Logging... in warn");
    this.logger.error("test Logging... in error");

    this.logger.logLevel = LogLevel.ERROR;
    console.log('============Error Log Level===========');
    this.logger.debug("test Logging... in debug");
    this.logger.info("test Logging... in info");
    this.logger.warn("test Logging... in warn");
    this.logger.error("test Logging... in error");
  }
}
