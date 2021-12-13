import { Coin } from './../../model/coin';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CoinserviceService {

  constructor(private http: HttpClient) { }

  baseUrl = "http://localhost:3000/api/symbols";

  getAll(): Observable<Coin[]>{
    return this.http.get<Coin[]>(`${this.baseUrl}`);
  }

  getById(id:number): Observable<Coin>{
    return this.http.get<Coin>(`${this.baseUrl}/${id}`);
  }

  create(coin: Coin): Observable<Coin>{
    return this.http.post<Coin>(`${this.baseUrl}`,coin);
  }

  update(id:number,coin:Coin): Observable<Coin>{
    return this.http.put<Coin>(`${this.baseUrl}/${id}`,coin);
  }

  delete(id:number): Observable<void>{
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
}
