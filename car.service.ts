import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Car } from '../dashboard/car/car';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  constructor(private _http: HttpClient) { }

  addCar(data: any): Observable<any> {
    return this._http.post('http://localhost:3000/car',data);
  }
  getCarList(): Observable<any> {
    return this._http.get('http://localhost:3000/car');
  }
  updatecar(id: number,data: any): Observable<any> {
    return this._http.put(`http://localhost:3000/car/${id}`,data);
  }
  deleteCar(id: number): Observable<Car> {
    return this._http.delete<Car>(`http://localhost:3000/car/${id}`);
  }  
}
