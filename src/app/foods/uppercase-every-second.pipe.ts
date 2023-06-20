import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'uppercaseEverySecond',
})
export class UppercaseEverySecondPipe implements PipeTransform {
  transform(value: string): string {
    let result = '';
    for (let i = 0; i < value.length; i++) {
      if (i % 2 === 0) {
        result += value.charAt(i).toLowerCase();
      } else {
        result += value.charAt(i).toUpperCase();
      }
    }
    return result;
  }
}
