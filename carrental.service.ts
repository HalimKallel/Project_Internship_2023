import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Carrental } from '../dashboard/carrental/carrental';

@Injectable({
  providedIn: 'root'
})
export class CarrentalService {

  constructor(private _http: HttpClient) { }

  addCarrental(data: any): Observable<any> {
    return this._http.post('http://localhost:3000/carrental',data);
  }
  getCarrentalList(): Observable<any> {
    return this._http.get('http://localhost:3000/carrental');
  }
  updatecarrental(id: number,data: any): Observable<any> {
    return this._http.put(`http://localhost:3000/carrental/${id}`,data);
  }
  deleteCarrental(id: number): Observable<Carrental> {
    return this._http.delete<Carrental>(`http://localhost:3000/carrental/${id}`);
  }  
}
