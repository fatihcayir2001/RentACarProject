import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { fileURLToPath } from 'node:url';
import { Brand } from 'src/app/models/brand';
import { Car } from 'src/app/models/car';
import { CarDetailDto } from 'src/app/models/carDetailDto';
import { Color } from 'src/app/models/color';
import { BrandService } from 'src/app/services/brand.service';
import { CarImageService } from 'src/app/services/car-image.service';
import { CarService } from 'src/app/services/car.service';
import { ColorService } from 'src/app/services/color.service';

@Component({
  selector: 'app-car-update',
  templateUrl: './car-update.component.html',
  styleUrls: ['./car-update.component.css']
})
export class CarUpdateComponent implements OnInit {

  carUpdateForm:FormGroup;
  carDetail:CarDetailDto;
  brands: Brand[];
  colors: Color[];
  carId:number;
  image:File;

  constructor(private toastrService:ToastrService,
    private formBuilder:FormBuilder,
    private carService:CarService,
    private brandService:BrandService,
    private colorService:ColorService,
    private activatedRoute:ActivatedRoute,
    private carImageService:CarImageService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      if(params["carId"]){
       
        this.getCarDetailsById(params["carId"]);
        this.getBrands();
        this.getColors();
        this.createCarUpdateForm();
        this.carId=parseInt(params["carId"]);
        
 
      }
    })
  }


  createCarUpdateForm(){
    this.carUpdateForm=this.formBuilder.group({
       carId:[this.carId],
       colorId:["",Validators.required],
       brandId:["",Validators.required],
       modelYear:["",Validators.required],
       dailyPrice:["",Validators.required],
       description:["",Validators.required],
       file:[""]
    })
  }

  getBrands(){
    this.brandService.getBrands().subscribe(response=>{
    this.brands=response.data;
    })
  }   
    
  getColors(){
    this.colorService.getColors().subscribe(response=>{
    this.colors=response.data;
     })
   }

   onFileChanged(event:any) {
    this.image = event.target.files[0]
  }

  onUpload(carId:string) {
    // this.http is the injected HttpClient
    const uploadData = new FormData();
    uploadData.append('myFile', this.image, this.image.name);
    uploadData.append('id', carId);
    this.carImageService.Upload(this.image)
    console.log(this.image)
  }

   getCarDetailsById(carId:number){
    this.carService.getCarDetails(carId).subscribe(response=>{
      this.carDetail=response.data[0];
      this.carUpdateForm.setValue({
        carId:this.carDetail.carId,
        colorId:this.carDetail.colorId,
        brandId:this.carDetail.brandId,
        modelYear:this.carDetail.modelYear,
        dailyPrice:this.carDetail.dailyPrice,
        description:this.carDetail.description,
        file:this.carDetail.imagePath
      })
    })
  }



  updateCar(){
    if(this.carUpdateForm.valid){      
      let carModel = Object.assign({},this.carUpdateForm.value)
      console.log(carModel)
       this.carService.update(carModel).subscribe(response=>{
         this.toastrService.success(response.message)
       },responseError=>{
         this.toastrService.error(responseError.message)
       })
    }else{
      this.toastrService.error("Formunuz eksik","HATA")
    }    
  }

  
}
