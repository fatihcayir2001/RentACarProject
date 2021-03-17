import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { category } from 'src/app/models/category';
import { color } from 'src/app/models/color';
import { ColorService } from 'src/app/services/color.service';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css'],
})
export class ColorComponent implements OnInit {
  colors: color[] = [];
  dataLoaded:boolean=false;
  constructor(private colorService: ColorService) {}
  currentCategory : category;
  currentColor: color;

  defaultColor: color = { colorId: -1, colorName: 'default' };

  ngOnInit(): void {
    this.getColors()
  }

  

  getColors() {
    this.colorService.getColors().subscribe((response) => {
      this.colors=response.data
      this.dataLoaded=true
    });
  }

  setCurrentColor(color: color) {
    this.currentColor = color;
    if (color.colorId != -1) {
      this.defaultColor.colorId = 0;
    }
  }

  getCurrentColorClass(color: color) {
    if (color.colorId == -1) {
      return 'list-group-item active';
    }
    if (color == this.currentColor) {
      return 'list-group-item active';
    } else {
      return 'list-group-item';
    }
  }
}
