import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm, ReactiveFormsModule } from '@angular/forms';
import { PaymentDetail } from '../../services/payment.model';
import { PaymentService } from '../../services/payment.service';
@Component({
  selector: 'app-payment-forms',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './payment-forms.component.html',
  styleUrl: './payment-forms.component.css'
})
export class PaymentFormsComponent implements OnInit {
  constructor(private paymentService: PaymentService) {

  }
  paymentDetailForm: PaymentDetail = {
    cardNumber: '',
    ownerName: '',
    expireDate: '',
    securityCode: '',
    paymentDetailId: 0
  }
  ngOnInit(): void {
    this.paymentService.curretPaymentDetal.subscribe((paymentDetail) => {
      this.paymentDetailForm = paymentDetail;
    });
  }
  onSubmit(form: NgForm) {
    const paymentInfo: PaymentDetail = form.value;
    if(paymentInfo.paymentDetailId == 0 || paymentInfo.paymentDetailId == null){
      delete paymentInfo.paymentDetailId;
      this.paymentService.postPaymentDetail(paymentInfo);
    }
    else{
      this.paymentService.putPaymentDetail(paymentInfo);
    }
    form.reset();
  }
}
