import { Pipe, PipeTransform } from '@angular/core';
import { Car } from '../models/car';
import { CarDetailDto } from '../models/carDetailDto';

@Pipe({
  name: 'filterPipe'
})
export class FilterPipePipe implements PipeTransform {

  transform(value: CarDetailDto[], filterText: string): CarDetailDto[] {
    filterText ? (filterText = filterText.toLowerCase()) : '';
    return filterText?value.filter((c:CarDetailDto)=>
    c.brandName.toLocaleLowerCase().includes(filterText) || c.colorName.toLocaleLowerCase().includes(filterText) || c.description.toLocaleLowerCase().includes(filterText)):value
  }

}
