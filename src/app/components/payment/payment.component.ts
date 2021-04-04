import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Rental } from 'src/app/models/rental';

import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators,
} from '@angular/forms';
import { CarService } from 'src/app/services/car.service';
import { PaymentService } from 'src/app/services/payment.service';
import { ToastrService } from 'ngx-toastr';
import { RentalService } from 'src/app/services/rental.service';
import { CarDetailDto } from 'src/app/models/carDetailDto';


@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css'],
})
export class PaymentComponent implements OnInit {
  constructor(
    private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder,
    private carService: CarService,
    private paymentService: PaymentService,
    private toastrService: ToastrService,
    private rentalService: RentalService,
    private router: Router
  ) {}

  rental: Rental;
  carToRent: CarDetailDto;
  totalDay: number;
  totalPrice: number;
  paymentForm = new FormGroup({
    cardHolderName: new FormControl('', Validators.required),
    cardNumber: new FormControl('', Validators.required),
    validationMonth: new FormControl('', Validators.required),
    validationYear: new FormControl('', Validators.required),
    cvc: new FormControl('', Validators.required),
  });

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.rental = JSON.parse(params['rental']);
      this.getCarDetails(this.rental.carId);
    });
  }
  getCarDetails(carId: number) {
    this.carService.getFullCarDetails(carId).subscribe((response) => {
      this.carToRent = response.data[0];
      this.getTotalPrice();
    });
  }
  getTotalPrice() {
    let rentDate = new Date(this.rental.rentDate);
    let returnDate = new Date(this.rental.returnDate);
    this.totalDay =
      (returnDate.getTime() - rentDate.getTime()) / (24 * 3600 * 1000);
    this.totalPrice = this.totalDay * this.carToRent.dailyPrice;
  }
  Payment() {
    if (this.paymentForm.valid) {
      let payment = Object.assign(
        { amount: this.totalPrice },
        this.paymentForm.value
      );
      console.log(payment);

      this.paymentService.payment(payment).subscribe(
        (response) => {
          this.toastrService.success(response.message);
          this.rentalService.addRental(this.rental).subscribe((response) => {
            this.router.navigate(['/']);
          });
        },
        (responseError) => {
          this.toastrService.error(responseError.error.message);
        }
      );
    } else {
      this.toastrService.warning('Please Fill the Required Areas !');
    }
  }
}