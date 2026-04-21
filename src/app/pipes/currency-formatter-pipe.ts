import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currencyFormatter',
})
export class CurrencyFormatterPipe implements PipeTransform {
  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }
}
