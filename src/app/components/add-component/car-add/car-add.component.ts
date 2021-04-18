import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators,
} from '@angular/forms';
import { ɵCOMPILER_PROVIDERS__POST_R3__ } from '@angular/platform-browser-dynamic';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { Brand } from 'src/app/models/brand';
import { Color } from 'src/app/models/color';
import { ResponseModel } from 'src/app/models/responseModel';
import { BrandService } from 'src/app/services/brand.service';
import { CarService } from 'src/app/services/car.service';
import { ColorService } from 'src/app/services/color.service';

@Component({
  selector: 'app-car-add',
  templateUrl: './car-add.component.html',
  styleUrls: ['./car-add.component.css'],
})
export class CarAddComponent implements OnInit {
  carAddForm: FormGroup;
  brands: Brand[];
  colors: Color[];
  
  constructor(
    private formBuilder: FormBuilder,
    private carService: CarService,
    private toastrService: ToastrService,
    private brandService: BrandService,
    private colorService: ColorService
  ) {}

  ngOnInit(): void {
    this.createCarAddFrom();
    this.getBrands();
    this.getColors();
  }

  createCarAddFrom() {
    this.carAddForm = this.formBuilder.group({
      colorId: ['', Validators.required],
      brandId: ['', Validators.required],
      modelYear: ['', Validators.required],
      description: ['', Validators.required],
      dailyPrice: ['', Validators.required],
    });
  }

  add() {
    if (this.carAddForm.valid) {
      let carAddForm = Object.assign({}, this.carAddForm.value);

      this.carService.add(carAddForm).subscribe(
        (data) => {
          console.log(data);
          this.toastrService.success(data.message, 'Başarılı');
        },
        (responseError) => {
          
          if (responseError.error.Errors.length > 0) {
            console.log(responseError.error.Errors);
            for (let i = 0; i < responseError.error.Errors.length; i++) {
              this.toastrService.warning(
                responseError.error.Errors[i].ErrorMessage,
                'Uyarı'
              );
            }
          }
        }
      );
    } else {
      this.toastrService.warning('Formunuz hatalı', 'Uyarı');
    }
  }


  getBrands(){
    this.brandService.getBrands().subscribe(response=>
      {
        this.brands=response.data;
      })
  }

  getColors(){
    this.colorService.getColors().subscribe(response=>{
      this.colors=response.data;
    })
  }
}
