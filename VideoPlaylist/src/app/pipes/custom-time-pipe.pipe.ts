import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customTimePipe'
})
export class CustomTimePipePipe implements PipeTransform {

  transform(value: number) {
    const date = new Date(null);
    date.setSeconds(value);
    const  result = date.toISOString().substr(11, 8);
    return result;
  }

}
