import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../models/product.model';
import { CurrencyFormatterPipe } from '../../pipes/currency-formatter-pipe';
import { TimeAgoPipe } from '../../pipes/time-ago-pipe';
import { StarRating } from '../star-rating/star-rating';

@Component({
  selector: 'app-product-card',
  standalone:true,
  imports: [CommonModule, StarRating, CurrencyFormatterPipe, TimeAgoPipe],
  templateUrl: './product-card.html',
  styleUrl: './product-card.css',
})
export class ProductCard {
  @Input({ required: true }) product!: Product;
  @Output() ratingChange = new EventEmitter<{ productId: number; rating: number }>();

  get isLowStock(): boolean {
    return this.product.stockCount < 5;
  }

  onRateProduct(rating: number): void {
    this.ratingChange.emit({ productId: this.product.id, rating });
  }
}
