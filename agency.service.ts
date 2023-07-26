import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Agency } from '../dashboard/agency/agency';

@Injectable({
  providedIn: 'root'
})
export class AgencyService {

  constructor(private _http: HttpClient) { }

  addAgency(data: any): Observable<any> {
    return this._http.post('http://localhost:3000/agency',data);
  }
  getAgencyList(): Observable<any> {
    return this._http.get('http://localhost:3000/agency');
  }
  updateagency(id: number,data: any): Observable<any> {
    return this._http.put(`http://localhost:3000/agency/${id}`,data);
  }
  deleteAgency(id: number): Observable<Agency> {
    return this._http.delete<Agency>(`http://localhost:3000/agency/${id}`);
  }  
}
