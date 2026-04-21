import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-star-rating',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './star-rating.html',
  styleUrl: './star-rating.css',
})
export class StarRating {
  @Input() rating = 0;
  @Output() rated = new EventEmitter<number>();

  readonly stars = [1, 2, 3, 4, 5];

  setRating(star: number): void {
    this.rating = star;
    this.rated.emit(star);
  }
}
