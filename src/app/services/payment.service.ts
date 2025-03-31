import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PaymentDetail } from './payment.model';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  constructor(private http: HttpClient) { }
  readonly apiUrl = 'http://localhost:7260/api/PaymentDetail';
  paymentListChanged = new BehaviorSubject<PaymentDetail[]>([]);

  postPaymentDetails(paymentDetail: PaymentDetail) {
    return this.http.post(this.apiUrl, paymentDetail).subscribe((newPaymentRes) => {
      const currentPaymentArray = this.paymentListChanged.getValue() || [];
      this.paymentListChanged.next([...currentPaymentArray, newPaymentRes as PaymentDetail])
    });
  }
  getPaymentDetails() {
    this.http.get<PaymentDetail[]>(this.apiUrl).subscribe((paymentInfoRes) => {
      this.paymentListChanged.next([...paymentInfoRes]);
    })
  }

}
