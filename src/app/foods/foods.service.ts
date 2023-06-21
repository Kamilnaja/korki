import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Food, Response } from './foods.model';

@Injectable({
  providedIn: 'root',
})
export class FoodsService {
  private readonly API_FOODS = 'http://localhost:8080/api/foods/';

  constructor(private httpClient: HttpClient) {}

  getFoods(): Observable<Response> {
    return this.httpClient.get<Response>(this.API_FOODS);
  }

  postFood(food: Food): Observable<Food> {
    return this.httpClient.post<Food>(this.API_FOODS, food);
  }

  getFoodById(id: number): Observable<Food> {
    return this.httpClient.get<Food>(this.API_FOODS + id);
  }
}
