import { Component, inject } from '@angular/core';
import { ProductsService } from '../../data-access/products.service';
import { CommonModule } from '@angular/common';
import { toSignal } from '@angular/core/rxjs-interop'; 

// ARREGLADO: Esta es la ruta correcta para encontrar tu interfaz
import { Product } from '../../utils/product.interface'; 

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css',
  // Ya no necesitamos 'providers' aquí porque tu servicio usa 'providedIn: root'
})
export default class ProductList {

  private productsService = inject(ProductsService);

  // Este signal llama al servicio (que ya está bien)
  // y usa la interfaz (que ahora sí encuentra)
  public products = toSignal<Product[]>(
    this.productsService.getProducts(),
    { initialValue: [] } 
  );

  constructor() {
    console.log('Componente ProductList cargado');
    // Ya no necesitas el .subscribe() aquí, toSignal() lo hace por ti
  }

}