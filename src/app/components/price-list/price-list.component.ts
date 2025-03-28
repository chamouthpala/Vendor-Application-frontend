import { Component } from '@angular/core';
import { PricingService } from '../../services/pricing.service';
import { PriceCalculation } from '../../models/product.model';

@Component({
  selector: 'app-price-list',
  templateUrl: './price-list.component.html',
  styleUrls: ['./price-list.component.css']
})
export class PriceListComponent {
  selectedProduct: string = '';
  priceList: PriceCalculation[] = [];

  constructor(private pricingService: PricingService) {}

  loadPriceList() {
    if (this.selectedProduct) {
      this.pricingService.getPriceList(this.selectedProduct)
        .subscribe(
          result => this.priceList = result,
          error => console.error('Error loading price list', error)
        );
    }
  }
}