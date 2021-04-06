import { Car } from "./car";
import { CarImage } from "./carImage";

export interface CarDetailDto extends Car{
    carId:number;
    brandName:string;
    colorName:string;
    description:string;
    dailyPrice:number;
    imagePath:string[];
    modelYear:number
    carImages : CarImage[];
    
}