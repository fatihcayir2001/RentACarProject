import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http"
import { BrowserAnimationsModule } from "@angular/platform-browser/animations"


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
import { CommonModule } from '@angular/common';
import { FilterPipePipe } from './pipes/filter-pipe.pipe';
import { FormsModule } from '@angular/forms';
import { ToastrModule} from 'ngx-toastr'
import { from } from 'rxjs';
import { FilterComponent } from './components/filter/filter.component';







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
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
