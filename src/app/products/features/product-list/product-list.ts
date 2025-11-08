import { Component, inject } from '@angular/core';
import { ProductsService } from '../../data-access/products.service';
import { CommonModule } from '@angular/common'; // <-- Necesario para *ngFor
import { toSignal } from '@angular/core/rxjs-interop'; 
import { Product } from '../../utils/product.interface'; 
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, RouterLink], 
  templateUrl: './product-list.html',
  styleUrl: './product-list.css',
})
export default class ProductList {

  private productsService = inject(ProductsService);

  products = toSignal<Product[]>(this.productsService.getProducts());
  
  constructor() {}
}