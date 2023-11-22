import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductsComponent } from './products/products.component';
import { BodyComponent } from './body/body.component';




@NgModule({
  declarations: [
    DashboardComponent,
    ProductsComponent,
    BodyComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ],
  exports: [
    DashboardComponent,
    ProductsComponent,
    BodyComponent
  ]
})
export class DashboardModule { }
