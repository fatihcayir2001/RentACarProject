import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrandComponent } from './components/brand/brand.component';
import { CarAddComponent } from './components/add-component/car-add/car-add.component';
import { CarDetailComponent } from './components/car-detail/car-detail.component';
import { CarComponent } from './components/car/car.component';
import { ColorComponent } from './components/color/color.component';
import { PaymentComponent } from './components/payment/payment.component';
import { RentalComponent } from './components/rental/rental.component';
import { CarUpdateComponent } from './components/update-component/car-update/car-update.component';
import { BrandListComponent } from './components/list-component/brand-list/brand-list.component';
import { CarListComponent } from './components/list-component/car-list/car-list.component';
import { BrandAddComponent } from './components/add-component/brand-add/brand-add.component';
import { CarDeleteComponent } from './components/delete/car-delete/car-delete.component';
import { ColorAddComponent } from './components/add-component/color-add/color-add.component';
import { ColorListComponent } from './components/list-component/color-list/color-list.component';
import { ColorUpdateComponent } from './components/update-component/color-update/color-update.component';
import { BrandUpdateComponent } from './components/update-component/brand-update/brand-update.component';
import { LoginComponent } from './components/login/login.component';
import { LoginGuard } from './guards/login.guard';
import { MainComponent } from './components/main/main.component';

const routes: Routes = [
  { path: '', component: MainComponent }, // ekranda ilk ne gösterilsin (tıklanmadığında)
  { path: 'cars', component: CarComponent },
  { path: 'cars/:brandId', component: CarComponent },
  { path: 'cars/color/:colorId', component: CarComponent },
  { path: 'cars/:carId', component: CarComponent },
  { path: 'cars/car/:carId', component: CarDetailComponent},
  { path: 'rentals', component: RentalComponent},
  { path: 'cars/brand/:brandId/color/:colorId', component: CarComponent },
  { path: 'payment/:rental', component: PaymentComponent },
  { path: 'payment', component: PaymentComponent },
  { path: 'add/car', component: CarAddComponent, canActivate:[LoginGuard]},
  { path: 'add/brand', component:BrandAddComponent, canActivate:[LoginGuard]},
  { path: 'add/color', component:ColorAddComponent, canActivate:[LoginGuard]},
  { path: 'brands', component:BrandListComponent},
  { path: 'update/cars/:carId', component:CarUpdateComponent},
  { path: 'update/colors/:colorId', component:ColorUpdateComponent},
  { path: 'update/brands/:brandId', component:BrandUpdateComponent},
  { path: 'update/cars', component:CarListComponent},
  { path: 'update/colors', component:ColorListComponent},
  { path: 'update/brands', component:BrandListComponent},
  { path: 'delete/cars/:carId', component:CarDeleteComponent},
  { path: 'login', component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
