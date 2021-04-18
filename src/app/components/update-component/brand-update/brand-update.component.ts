import { Component, OnInit } from '@angular/core';
import { Brand } from 'src/app/models/brand';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BrandService } from 'src/app/services/brand.service';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute } from '@angular/router';
import { BrandListComponent } from '../../list-component/brand-list/brand-list.component';

@Component({
  selector: 'app-brand-update',
  templateUrl: './brand-update.component.html',
  styleUrls: ['./brand-update.component.css']
})
export class BrandUpdateComponent implements OnInit {

  brandUpdateForm:FormGroup;
  brand: Brand[];
  brandId:number;
  currentBrand:Brand[];

  constructor(private brandService:BrandService,
    private toastrService:ToastrService,
    private formBuilder:FormBuilder,
    private activatedRoute:ActivatedRoute) { }


  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      if(params["brandId"]){
        this.getBrandsById(params["brandId"]);
        this.createBrandUpdateForm();
        this.getBrands();
        this.setCurrentBrand();
        this.brandId=parseInt(params["brandId"]);
      }
    })
  }


   createBrandUpdateForm(){
    this.brandUpdateForm=this.formBuilder.group({
      brandId:[this.brandId],
      brandName:["",Validators.required]
    })
   }

   getBrands(){
     this.brandService.getBrands().subscribe(response=>
      {
        this.brand = response.data
      })
     
   }

   update(){
    if(this.brandUpdateForm.valid){      
      let carModel = Object.assign({},this.brandUpdateForm.value)
      console.log(carModel)
       this.brandService.update(carModel).subscribe(response=>{
         this.toastrService.success(response.message)
       },responseError=>{
         if (responseError.error.Errors.length > 0) {
           for (let i = 0; i < responseError.error.Errors.length; i++) {
            this.toastrService.warning(
              responseError.error.Errors[i].ErrorMessage,
              'Uyarı'
            );
           }
         }
       })
    }else{
      this.toastrService.error("Formunuz eksik","HATA")
    }    
   }

   setCurrentBrand(){
     
   }

   getBrandsById(brandId:number){
     
    this.brandService.getById(brandId).subscribe(response=>{
      this.currentBrand = response.data
      console.log(this.currentBrand)
      this.brandUpdateForm.setValue({
        brandId:this.currentBrand[0].brandId,
        brandName:this.currentBrand[0].brandName
      })
    })
  }
}
