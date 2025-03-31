import { Component } from '@angular/core';
import { PaymentFormsComponent } from "./payment-forms/payment-forms.component";

@Component({
  selector: 'app-payment-details',
  imports: [PaymentFormsComponent],
  templateUrl: './payment-details.component.html',
  styleUrl: './payment-details.component.css'
})
export class PaymentDetailsComponent {

}
