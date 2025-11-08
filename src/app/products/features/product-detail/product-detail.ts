import { Component, Signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsService } from '../../data-access/products.service';
import { inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../../utils/product.interface';
import { toSignal } from '@angular/core/rxjs-interop';
import { switchMap } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [ CommonModule ],
  templateUrl: './product-detail.html',
  styleUrl: './product-detail.css',
})
export class ProductDetail {

  private producService = inject(ProductsService);
  private route = inject(ActivatedRoute);

  product: Signal<Product | undefined> = toSignal(
    this.route.paramMap.pipe(
      switchMap(params => {
        const id = params.get('id');
        return id ? this.producService.getProductById(+id) : of(undefined);
      })
    )
  );
}
