import { color } from "./color";
import { ResponseModel } from "./responseModel";

export interface colorResponseModel extends ResponseModel{
    data:color[]
}