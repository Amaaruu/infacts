// En: src/app/products/data-access/products.service.ts

import { Injectable } from "@angular/core";
import { BaseHttpService } from "../../shared/data-access/base-http.service";
import { Product } from "../utils/product.interface";
import { Observable } from "rxjs"; 

@Injectable({
    providedIn: 'root' 
})
export class ProductsService extends BaseHttpService {
    
    getProducts(): Observable<Product[]> {
        return this.http.get<Product[]>(`${this.apiUrl}/products`);
    }

    getProductById(id: number): Observable<Product> {
        return this.http.get<Product>(`${this.apiUrl}/products/${id}`);
    }
} 