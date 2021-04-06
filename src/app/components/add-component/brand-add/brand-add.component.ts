import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,FormControl,Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Brand } from 'src/app/models/brand';
import { BrandService } from 'src/app/services/brand.service';

@Component({
  selector: 'app-brand-add',
  templateUrl: './brand-add.component.html',
  styleUrls: ['./brand-add.component.css']
})
export class BrandAddComponent implements OnInit {

  brandAddForm:FormGroup;
  brands:Brand[]

  constructor(private brandService:BrandService,private formBuilder:FormBuilder, private toastrService:ToastrService) { }


  ngOnInit(): void {
    this.getBrands()
    this.CreateBrandAddFrom()
  }

  getBrands(){
    this.brandService.getBrands().subscribe(response=>
      {
        this.brands=response.data;
      })
  }

  CreateBrandAddFrom() {
    this.brandAddForm = this.formBuilder.group({
      brandName: ['', Validators.required],
    });
  }

  add() {
    if (this.brandAddForm.valid) {
      let brandAddForm = Object.assign({}, this.brandAddForm.value);

      this.brandService.add(brandAddForm).subscribe(
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
}
