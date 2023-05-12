import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'separador'
})
export class SeparadorPipe implements PipeTransform {

  transform(value: any, ...args: unknown[]): unknown {
    return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");;
  }

}
