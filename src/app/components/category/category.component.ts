import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { category } from 'src/app/models/category';
import { Color } from 'src/app/models/color';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  category:any[]=[]
  categories:any[]=["Brands","Colors","Cars"]
  currentCategory : category;
  colors:Color[]=[]

  constructor() { }

  ngOnInit(): void {
  }

  setCurrentCategory(category:any){
    this.currentCategory=category
    
  }

  getCurrentCategoryClass(category:any){
    if (category==this.currentCategory) {
      return "list-group-item active"
    }else
    {
      return "list-group-item"
    }

  }

  



}
