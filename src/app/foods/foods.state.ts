import { Injectable, inject } from '@angular/core';
import { Subject, take } from 'rxjs';
import { Food, Response } from './foods.model';
import { FoodsService } from './foods.service';

@Injectable({
  providedIn: 'root',
})
export class FoodsState {
  private foodsSource$ = new Subject<Response>();
  foods$ = this.foodsSource$.asObservable();

  private foodsService = inject(FoodsService);

  getFoods(): void {
    this.foodsService
      .getFoods()
      .pipe(take(1))
      .subscribe((response) => {
        this.foodsSource$.next(response);
      });
  }

  postFood(food: Food): void {
    this.foodsService
      .postFood(food)
      .pipe(take(1))
      .subscribe(() => {
        this.getFoods();
      });
  }
}
