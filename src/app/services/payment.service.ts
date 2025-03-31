import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PaymentDetail } from './payment.model';
import { BehaviorSubject, Subject } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { UiService } from './ui.service';
@Injectable({
  providedIn: 'root'
})
export class PaymentService {
  constructor(private http: HttpClient,private uiService: UiService) {}
  readonly baseUrl = 'http://localhost:7260/api/PaymentDetail';
  paymentListChanged = new BehaviorSubject<PaymentDetail[]>([]);
  curretPaymentDetal = new Subject<PaymentDetail>();
  postPaymentDetail(peymentData: PaymentDetail) {
    return this.http.post(this.baseUrl, peymentData).subscribe({
      next: (newPaymentRes) => {
        const currentPaymentArray = this.paymentListChanged.getValue() || [];
        this.paymentListChanged.next([
          ...currentPaymentArray,
          newPaymentRes as PaymentDetail,
        ]);
      },
      complete: () => {
        this.uiService.showSuccess('موفقیت', 'اطلاعات با موفقیت ثبت شد');
      },
      error: () => {
        this.uiService.showError('خطا', 'ثبت با خطا مواجه شد');
      },
    });
  }

  getPaymentDetails() {
    this.http.get<PaymentDetail[]>(this.baseUrl).subscribe({
      next: (paymentRes) => {
        this.paymentListChanged.next([...paymentRes]);
      },
      error:()=>{
        this.uiService.showError('خطا', 'دریافت با خطا مواجه شد');
      }
    });
  }

  putPaymentDetail(paymentData: PaymentDetail) {
    const paymentId = paymentData.paymentDetailId;

    return this.http
      .put(this.baseUrl + '/' + paymentId, paymentData)
      .subscribe({
        next: (response) => {},
        complete: () => {
          this.getPaymentDetails();
          this.uiService.showSuccess('موفقیت', 'اطلاعات با موفقیت بروز شد');
        },
        error: (error) => {
          this.uiService.showError('خطا', 'بروزرسانی با خطا مواجه شد');
        },
      });
  }


  deletePaymentDetail(paymentId: number) {
    this.http.delete(this.baseUrl + '/' + paymentId).subscribe({
      complete: () => {
        this.getPaymentDetails();
        this.uiService.showSuccess('موفقیت', 'اطلاعات با موفقیت حذف شد');
      },error: (error) => {
        this.uiService.showError('خطا', 'حذف با خطا مواجه شد');
      },
    });
  }

}
