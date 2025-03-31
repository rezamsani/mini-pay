import { Component, OnInit } from '@angular/core';
import { PaymentFormsComponent } from "./payment-forms/payment-forms.component";
import { PaymentService } from '../services/payment.service';
import { PaymentDetail } from '../services/payment.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-payment-details',
  //standalone: true,
  imports: [PaymentFormsComponent, CommonModule],
  templateUrl: './payment-details.component.html',
  styleUrl: './payment-details.component.css'
})
export class PaymentDetailsComponent implements OnInit {
  paymentDetailList: PaymentDetail[]
  constructor(private paymentService: PaymentService) { }
  ngOnInit(): void {
    this.paymentService.paymentListChanged.subscribe((paymentList)=>{
      this.paymentDetailList = paymentList;
    })
    this.paymentService.getPaymentDetails();
  }
  currentPaymentHandler(paymentDetail: PaymentDetail){
      this.paymentService.curretPaymentDetal.next({...paymentDetail});
  }

}

