import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currencyFormatter',
  standalone: true,
  pure: true,
})
export class CurrencyFormatterPipe implements PipeTransform {
  transform(value: number, currencyCode = 'INR', locale = 'en-IN'): string {
    return new Intl.NumberFormat(locale, {
      style: 'currency',
      currency: currencyCode,
      maximumFractionDigits: 0,
    }).format(value);
  }
}
