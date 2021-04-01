import { CarImage } from "./carImage";

export interface CarDetailDto{
    carId:number;
    brandName:string;
    colorName:string;
    description:string;
    dailyPrice:number;
    modelYear:string;
    carImageDate:Date;
    imagePath:string[];
    
}