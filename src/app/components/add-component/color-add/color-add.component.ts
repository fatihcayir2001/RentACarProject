import { Component, OnInit } from '@angular/core';
import { Color } from 'src/app/models/color';
import { FormGroup,FormBuilder,FormControl,Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Brand } from 'src/app/models/brand';
import { BrandService } from 'src/app/services/brand.service';
import { ColorService } from 'src/app/services/color.service';

@Component({
  selector: 'app-color-add',
  templateUrl: './color-add.component.html',
  styleUrls: ['./color-add.component.css']
})
export class ColorAddComponent implements OnInit {

  colorAddForm:FormGroup;
  colors:Color[]

  constructor(private colorService:ColorService,private formBuilder:FormBuilder, private toastrService:ToastrService) {}

  ngOnInit(): void {
    this.getColors()
    this.CreateColorAddFrom()
  }

  getColors(){
    this.colorService.getColors().subscribe(response=>
      {
        this.colors=response.data;
      })
  }

  CreateColorAddFrom() {
    this.colorAddForm = this.formBuilder.group({
      colorName: ['', Validators.required],
    });
  }

  add() {
    if (this.colorAddForm.valid) {
      let colorAddForm = Object.assign({}, this.colorAddForm.value);

      this.colorService.add(colorAddForm).subscribe(
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
