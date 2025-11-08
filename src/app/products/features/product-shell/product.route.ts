// En: src/app/products/features/product-shell/product.route.ts

import { Routes } from "@angular/router";

export default [
    {
        path: '', 
        // ARREGLO: Añade .then() para cargar el 'default' export
        loadComponent: () => import('../product-list/product-list')
            .then(m => m.default), 
    },
    {
        path: ':id',
        loadComponent: () => import('../product-detail/product-detail')
            .then(m => m.ProductDetail),    

    }
] as Routes;