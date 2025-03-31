import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PaymentDetail } from './payment.model';
@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  constructor(private http:HttpClient) { }
  readonly apiUrl = 'https://localhost:7260/api/PaymentDetail';

  postPaymnetDetails(paymentDetail: PaymentDetail) {
    return this.http.post(this.apiUrl, paymentDetail);
  }
}
