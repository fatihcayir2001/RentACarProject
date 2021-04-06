import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Color } from 'src/app/models/color';
import { ColorService } from 'src/app/services/color.service';

@Component({
  selector: 'app-color-update',
  templateUrl: './color-update.component.html',
  styleUrls: ['./color-update.component.css']
})
export class ColorUpdateComponent implements OnInit {

  colorUpdateForm:FormGroup;
  colors: Color[];
  colorId:number

  constructor(private toastrService:ToastrService,
    private formBuilder:FormBuilder,
    private colorService:ColorService,
    private activatedRoute:ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      if(params["colorId"]){
        this.getColors();
        this.createColorUpdateForm();
        this.colorId=parseInt(params["colorId"]);
      }
    })
    
  }

  createColorUpdateForm(){
    this.colorUpdateForm=this.formBuilder.group({
       colorId:["",Validators.required],
      colorName:["",Validators.required]
    })
  }
  getColors(){
    this.colorService.getColors().subscribe(response=>{
    this.colors=response.data;
     })
   }
  
   update(){
    if(this.colorUpdateForm.valid){      
      let carModel = Object.assign({},this.colorUpdateForm.value)
      console.log(carModel)
       this.colorService.update(carModel).subscribe(response=>{
         this.toastrService.success(response.message)
       },responseError=>{
         this.toastrService.error(responseError.message)
       })
    }else{
      this.toastrService.error("Formunuz eksik","HATA")
    }    
   }

}
