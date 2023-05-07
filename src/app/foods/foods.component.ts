import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Food } from './foods.model';
import { FoodsState } from './foods.state';

@Component({
  selector: 'app-foods',
  templateUrl: './foods.component.html',
  styleUrls: ['./foods.component.scss'],
})
export class FoodsComponent implements OnInit {
  foods$ = this.state.foods$;
  foodForm = this.fb.group({
    name: ['Cottage cheese', [Validators.required]],
    id: ['1', [Validators.required]],
    caloriesPer100g: [100, [Validators.required]],
    weight: [100, [Validators.required]],
    nutriScore: ['A', [Validators.required]],
    tags: ['1', [Validators.required]],
  });

  constructor(private state: FoodsState, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.state.getFoods();
  }

  onSubmit(): void {
    const food: Food = this.mapFormToFood();
    this.state.postFood(food);
  }

  private mapFormToFood(): Food {
    return {
      name: this.foodForm.value.name ?? '',
      caloriesPer100g: this.foodForm.value.caloriesPer100g ?? 0,
      weight: this.foodForm.value.weight ?? 0,
      nutriScore: this.foodForm.value.nutriScore ?? '',
      tags: this.foodForm.value.tags ?? '',
    };
  }
}
