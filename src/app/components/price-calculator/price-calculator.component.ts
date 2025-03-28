import { Component } from '@angular/core';
import { PricingService } from '../../services/pricing.service';
import { PriceCalculation } from '../../models/product.model';

@Component({
  selector: 'app-price-calculator',
  templateUrl: './price-calculator.component.html',
  styleUrls: ['./price-calculator.component.css']

})
export class PriceCalculatorComponent {
  selectedProduct: string = '';
  quantity: number = 1;
  isCarton: boolean = false;
  calculation: PriceCalculation | null = null;

  constructor(private pricingService: PricingService) {}

  calculatePrice() {
    if (!this.selectedProduct) {
      alert('Please select a product');
      return;
    }

    this.pricingService.calculatePrice(
      this.selectedProduct, 
      this.quantity, 
      this.isCarton
    ).subscribe(
      result => this.calculation = result,
      error => console.error('Error calculating price', error)
    );
  }
}