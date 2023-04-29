import { Injectable } from '@angular/core';
import { Subject, take } from 'rxjs';
import { Response } from './foods.model';
import { FoodsService } from './foods.service';

@Injectable({
  providedIn: 'root',
})
export class FoodsState {
  private foodsSource$ = new Subject<Response>();
  foods$ = this.foodsSource$.asObservable();

  constructor(private foodsService: FoodsService) {}

  getFoods(): void {
    this.foodsService
      .getFoods()
      .pipe(take(1))
      .subscribe((response) => {
        this.foodsSource$.next(response);
      });
  }
}
