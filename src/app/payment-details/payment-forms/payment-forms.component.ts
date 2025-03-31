import { Component } from '@angular/core';
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
export class PaymentFormsComponent {
  constructor(private paymentService: PaymentService) {

  }
  onSubmit(form: NgForm) {
    const paymentInfo: PaymentDetail = form.value;
    this.paymentService.postPaymentDetails(paymentInfo);
    form.reset();
  }
}
