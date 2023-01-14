import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {  Games, Result } from '../models/game';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private http:HttpClient
  ) { }

  getData(): Observable<Games> {
    return this.http.get<Games>('https://api.rawg.io/api/platforms?key=cfca9f52cdea490aaae35a95b1db0f86' )
  }

  // https://api.rawg.io/api/platforms/{id}

  getDetail(id:number): Observable<Result>{
    return this.http.get<Result>(`https://api.rawg.io/api/platforms/${id}?key=cfca9f52cdea490aaae35a95b1db0f86`)
  } 
}
