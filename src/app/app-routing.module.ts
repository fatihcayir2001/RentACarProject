import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrandComponent } from './components/brand/brand.component';
import { CarDetailComponent } from './components/car-detail/car-detail.component';
import { CarComponent } from './components/car/car.component';
import { ColorComponent } from './components/color/color.component';
import { RentalComponent } from './components/rental/rental.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: CarComponent }, // ekranda ilk ne gösterilsin (tıklanmadığında)
  { path: 'cars', component: CarComponent },
  { path: 'cars/:brandId', component: CarComponent },
  { path: 'cars/color/:colorId', component: CarComponent },
  { path: 'cars/:carId', component: CarComponent },
  { path: 'cars/car/:carId', component: CarDetailComponent},
  { path: 'rentals', component: RentalComponent},
  { path: 'cars/brand/:brandId/color/:colorId', component: CarComponent },
  
  

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
