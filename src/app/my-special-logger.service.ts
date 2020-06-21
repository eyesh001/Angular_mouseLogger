import { Injectable, Inject, InjectionToken } from '@angular/core';
import { LogLevel } from './log-level.enum';
// import * as format from 'date-fns/format';
import { format } from 'date-fns';
import { LoggerService } from './logger-service';

export const LOG_LEVEL_TOKEN = new InjectionToken<LogLevel>('logLevel');

@Injectable({
  providedIn: 'root'
})
export class MySpecialLoggerService extends LoggerService{
  logs: string[] = [];
  private readonly MAX_HISTROY_CNT: number = 100;
  private readonly TIME_FORMATTER: string = 'yyyy-MM-dd HH:mm:ss.SSS';

  constructor(@Inject(LOG_LEVEL_TOKEN) logLevel: LogLevel) {
    super(logLevel);
  }

  log(logLevel:LogLevel, msg: string){
    const logMsg = this.getFormattedLogMsg(logLevel, msg);
    if(this.isProperLogLevel(logLevel)){
      console.log(logMsg);
      this.keepLogHistroy(logMsg)
    }
  }

  private keepLogHistroy(log: string){
    if(this.logs.length == this.MAX_HISTROY_CNT){
      this.logs.shift();
    }
    this.logs.push(log);
  }

  private getFormattedLogMsg(logLevel:LogLevel, msg:string){
    const curTimestamp = format(new Date(), this.TIME_FORMATTER);
    return `[${LogLevel[logLevel]}] ${curTimestamp} - ${msg}`;
  }

  // private isProperLogLevel(logLevel: LogLevel): boolean {
  //   if(this.logLevel === LogLevel.DEBUG) return true;
  //   return logLevel >= this.logLevel;
  // }
}
