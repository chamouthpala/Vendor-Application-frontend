import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PriceCalculatorComponent } from './components/price-calculator/price-calculator.component';
import { PriceListComponent } from './components/price-list/price-list.component';

const routes: Routes = [ 
  { path: 'price-calculator', component: PriceCalculatorComponent },
  { path: 'price-list', component: PriceListComponent },
  { path: '', redirectTo: '/price-calculator', pathMatch: 'full' }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
