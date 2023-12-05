import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateUSFormat'
})
export class DateUSFormatPipe implements PipeTransform {

  private _options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };

  transform(date: Date): string {
    return date.toLocaleDateString("en-US", this._options)
  }
}
