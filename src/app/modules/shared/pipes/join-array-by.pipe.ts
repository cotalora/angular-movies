import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'joinArrayBy'
})
export class JoinArrayByPipe implements PipeTransform {
  transform(array: string[], joinBy: string): string {
    return array.join(joinBy);
  }
}
