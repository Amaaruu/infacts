// En: src/app/products/features/product-list/product-list.ts

import { Component, inject } from '@angular/core';
import { ProductsService } from '../../data-access/products.service';
import { CommonModule } from '@angular/common'; // <-- Necesario para *ngFor
import { toSignal } from '@angular/core/rxjs-interop'; 
import { Product } from '../../utils/product.interface'; 

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule], // <-- Añadido CommonModule
  templateUrl: './product-list.html',
  styleUrl: './product-list.css',
  // 'providers' se elimina de aquí
})
export default class ProductList {

  private productsService = inject(ProductsService);

  // Esta línea ahora funcionará sin errores
  products = toSignal<Product[]>(this.productsService.getProducts());

  // El constructor ya no es necesario para llamar al servicio,
  // toSignal() lo hace por ti.
  constructor() {}
}