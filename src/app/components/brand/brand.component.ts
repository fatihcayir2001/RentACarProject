import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Brand } from 'src/app/models/brand';
import { BrandService } from 'src/app/services/brand.service';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css']
})
export class BrandComponent implements OnInit {
  
  brands:Brand[]=[]
  dataLoaded:boolean=true;
  currentBrand:Brand;
  defaultBrand: Brand = { brandId: -1, brandName: 'default' };

  constructor(private brandService:BrandService,private activatedRoute:ActivatedRoute) {}

  ngOnInit(): void {
    this.getBrands()
  }

  getBrands(){
    this.brandService.getBrands().subscribe(response=>{
      this.brands=response.data
    })
  }

   setCurrentBrand(brand: Brand) {
    this.currentBrand = brand;
    if (brand.brandId != -1) {
      this.defaultBrand.brandId = 0;
    }
  }

  getCurrentBrandClass(brand: Brand) {
    if (brand.brandId == -1) {
      return 'list-group-item active';
    }
    if (brand == this.currentBrand) {
      return 'list-group-item active';
    } else {
      return 'list-group-item';
    }
  }
}
