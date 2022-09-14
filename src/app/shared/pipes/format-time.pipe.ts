import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatTime'
})
export class FormatTimePipe implements PipeTransform {

  transform(value: Date, lastDate: Date = new Date()): string {
    const milliseconds = lastDate.getTime() - new Date(value).getTime();
    const seconds = milliseconds / 1000;
    const minutes = seconds / 60;
    const hours = minutes / 60;
    const isOne = hours == 1 ? '' : 's'
    return hours.toFixed(1) + ' hour' + isOne + ' ago';
  }

}
