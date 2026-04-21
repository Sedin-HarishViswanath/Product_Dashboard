import { CommonModule } from '@angular/common';
import { Component, computed, signal } from '@angular/core';
import { ProductCard } from './components/product-card/product-card';
import { MOCK_PRODUCTS } from './data/mock-products';
import { Product } from './models/product.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ProductCard],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = 'Product Management Dashboard';
  protected readonly searchQuery = signal('');
  private readonly products = signal<Product[]>(MOCK_PRODUCTS);

  protected readonly filteredProducts = computed(() => {
    const query = this.searchQuery().trim().toLowerCase();

    if (!query) {
      return this.products();
    }

    return this.products().filter((product) => {
      return (
        product.name.toLowerCase().includes(query) ||
        product.description.toLowerCase().includes(query)
      );
    });
  });

  protected updateSearch(query: string): void {
    this.searchQuery.set(query);
  }

  protected updateProductRating(payload: { productId: number; rating: number }): void {
    this.products.update((products) =>
      products.map((product) =>
        product.id === payload.productId
          ? { ...product, rating: payload.rating }
          : product
      )
    );
  }

  protected trackByProductId(_: number, product: Product): number {
    return product.id;
  }
}
