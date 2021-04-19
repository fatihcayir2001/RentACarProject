import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Color } from 'src/app/models/color';
import { ColorService } from 'src/app/services/color.service';

@Component({
  selector: 'app-color-list',
  templateUrl: './color-list.component.html',
  styleUrls: ['./color-list.component.css']
})
export class ColorListComponent implements OnInit {
  colors:Color[]
  currentColor:Color;
  constructor(private colorService:ColorService,
    private toastrService:ToastrService) { }

  ngOnInit(): void {
    this.getColors()
  }
  getColors(){
    this.colorService.getColors().subscribe(response=>{
      this.colors = response.data
    })
  }
  refreshPage() {
    setTimeout(() => {
      window.location.reload();
      this.toastrService.success("İşlem başarılı","Yönlendirliyorsunuz")
    }, 1500);
}

setCurrentColor(color:Color){
  this.currentColor = color
  console.log(this.currentColor)
}

delete(){
  this.colorService.delete(this.currentColor).subscribe(response=>{
    this.toastrService.success(response.message,"Success")
  },errorResponse=>{
    this.toastrService.error(errorResponse,"Failed")
  });
  console.log("car list delete çalıştı")
}
}
