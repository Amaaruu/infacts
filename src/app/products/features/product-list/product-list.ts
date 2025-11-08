import { Component, inject } from '@angular/core';
import { ProductsService } from '../../data-access/products.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css',
})
export default class ProductList {

  private productsService = inject(ProductsService);

  constructor(){
    this.productsService.getProducts().subscribe((products) => {
      console.log(products);
    })


  }

}
