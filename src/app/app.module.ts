import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http"
import { BrowserAnimationsModule } from "@angular/platform-browser/animations"
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarComponent } from './components/car/car.component';
import { BrandComponent } from './components/brand/brand.component';
import { ColorComponent } from './components/color/color.component';
import { CustomerComponent } from './components/customer/customer.component';
import { NaviComponent } from './components/navi/navi.component';
import { RentalComponent } from './components/rental/rental.component';
import { CarDetailComponent } from './components/car-detail/car-detail.component';
import { CategoryComponent } from './components/category/category.component';
import { CommonModule, DatePipe } from '@angular/common';
import { FilterPipePipe } from './pipes/filter-pipe.pipe';

import { ToastrModule} from 'ngx-toastr'
import { from } from 'rxjs';
import { FilterComponent } from './components/filter/filter.component';
import { PaymentComponent } from './components/payment/payment.component';
import { RentComponent } from './components/rent/rent.component';
import { CarAddComponent } from './components/add-component/car-add/car-add.component';
import { CarUpdateComponent } from './components/update-component/car-update/car-update.component';
import { BrandListComponent } from './components/list-component/brand-list/brand-list.component';
import { CarListComponent } from './components/list-component/car-list/car-list.component';
import { BrandAddComponent } from './components/add-component/brand-add/brand-add.component';
import { ColorAddComponent } from './components/add-component/color-add/color-add.component';
import { CarDeleteComponent } from './components/delete/car-delete/car-delete.component';
import { ColorListComponent } from './components/list-component/color-list/color-list.component';
import { ColorUpdateComponent } from './components/update-component/color-update/color-update.component';
import { BrandUpdateComponent } from './components/update-component/brand-update/brand-update.component';







@NgModule({
  declarations: [
    AppComponent,
    CarComponent,
    BrandComponent,
    ColorComponent,
    CustomerComponent,
    NaviComponent,
    RentalComponent,
    CategoryComponent,
    CarDetailComponent,
    FilterPipePipe,
    FilterComponent,
    PaymentComponent,
    RentComponent,
    CarAddComponent,
    CarUpdateComponent,
    BrandListComponent,
    CarListComponent,
    BrandAddComponent,
    ColorAddComponent,
    CarDeleteComponent,
    ColorListComponent,
    ColorUpdateComponent,
    BrandUpdateComponent,
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    FormsModule,
    ToastrModule.forRoot({
      positionClass:"toast-bottom-right"
    }),
    BrowserAnimationsModule,
    ReactiveFormsModule
  ],
  providers: [DatePipe,CarListComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
