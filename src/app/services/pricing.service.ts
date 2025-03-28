import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PriceCalculation } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class PricingService {
  private apiUrl = 'http://localhost:8080/api/pricing';

  constructor(private http: HttpClient) {}

  calculatePrice(
    productName: string, 
    quantity: number, 
    isCarton: boolean
  ): Observable<PriceCalculation> {
    return this.http.get<PriceCalculation>(`${this.apiUrl}/calculate`, {
      params: {
        productName,
        quantity: quantity.toString(),
        isCarton: isCarton.toString()
      }
    });
  }

  getPriceList(productName: string): Observable<PriceCalculation[]> {
    return this.http.get<PriceCalculation[]>(`${this.apiUrl}/price-list`, {
      params: { productName }
    });
  }
}