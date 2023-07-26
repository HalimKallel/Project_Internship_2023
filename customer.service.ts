import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cust } from '../dashboard/customer/cust';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private _http: HttpClient) { }

  addcustomer(data: any): Observable<any> {
    return this._http.post('http://localhost:3000/customer',data);
  }
  updatecustomer(id: number,data: any): Observable<any> {
    return this._http.put(`http://localhost:3000/customer/${id}`,data);
  }

  getCustomerList(): Observable<any> {
    return this._http.get('http://localhost:3000/customer');
  }

  deleteCustomer(id: number): Observable<Cust> {
    return this._http.delete<Cust>(`http://localhost:3000/customer/${id}`);
  }  
}
