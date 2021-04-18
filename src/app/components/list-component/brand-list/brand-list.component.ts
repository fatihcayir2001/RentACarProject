import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Toast, ToastrService } from 'ngx-toastr';
import { Brand } from 'src/app/models/brand';
import { BrandService } from 'src/app/services/brand.service';

@Component({
  selector: 'app-brand-list',
  templateUrl: './brand-list.component.html',
  styleUrls: ['./brand-list.component.css']
})
export class BrandListComponent implements OnInit {
  brands:Brand[]=[];
  dataLoaded=false;
  currentBrand:Brand

    constructor(private brandService:BrandService,
      private router:Router,
      private toastrService:ToastrService) { }
  
    ngOnInit(): void {
      this.getBrands();
    }
  
    getBrands(){
      this.brandService.getBrands().subscribe(response=>{
        this.brands=response.data;
        this.dataLoaded=true;
      })
    }

    routeAdd(){
      this.router.navigate(['add/brand'])
    }

    routeUpdate(brandId:number){
      this.router.navigate(['update/brands/'+brandId])
    }

    delete(){
      this.brandService.delete(this.currentBrand).subscribe(response=>{
        this.toastrService.success(response.message,"Success")
        console.log("brand list delete çalıştı")
      },errorResponse=>{
        this.toastrService.error(errorResponse,"Failed")
      });
      
    }
  
    refreshPage() {
        setTimeout(() => {
          window.location.reload();
          this.toastrService.success("İşlem başarılı","Yönlendirliyorsunuz")
        }, 1500);
    }
    
    setCurrentBrand(brand:Brand){
      this.currentBrand = brand
      
    }

    
}
