export interface Product {
    id?: number;
    name: string;
    cartonPrice: number;
    unitsPerCarton: number;
  }
  
  export interface PriceCalculation {
    productName: string;
    quantityRequested: number;
    cartons: number;
    singleUnits: number;
    totalPrice: number;
  }