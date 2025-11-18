import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface ProductCode {
  id: number;
  product_name: string;
  code: string;
}

export interface CreateProductCodeRequest {
  product_name: string;
  code: string;
}

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private apiUrl = 'http://localhost:8080/api';

  constructor(private http: HttpClient) { }

  getProductCodes(): Observable<ProductCode[]> {
    return this.http.get<ProductCode[]>(`${this.apiUrl}/product-codes`);
  }

  createProductCode(payload: CreateProductCodeRequest): Observable<ProductCode> {
    return this.http.post<ProductCode>(`${this.apiUrl}/product-codes`, payload);
  }

  deleteProductCode(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/product-codes/${id}`);
  }
}

