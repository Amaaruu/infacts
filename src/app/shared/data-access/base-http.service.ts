// En: src/app/shared/data-access/base-http.service.ts

import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
// ARREGLO: Quita '.development' de esta línea
import { environment } from "../../../environments/environment"; 

@Injectable({
    providedIn: 'root',
})
export class BaseHttpService {
    http = inject(HttpClient);
    apiUrl = environment.API_URL;
}