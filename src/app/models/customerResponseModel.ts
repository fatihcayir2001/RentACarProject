import { customer } from "./customer";
import { ResponseModel } from "./responseModel";

export interface customerResponseModel extends ResponseModel{
       data:customer[]
}