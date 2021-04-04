export interface Payment{
    id:string,
    cardNumber:number,
    cardHolderName:string,
    validationMonth:number,
    validationYear:number,
    amount:number,
    cvc:number
}