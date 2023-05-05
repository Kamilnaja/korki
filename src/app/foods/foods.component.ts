import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
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
    name: ['Cottage cheese'],
    id: ['1'],
    caloriesPer100g: [100],
    weight: [100],
    nutriScore: ['A'],
    tags: ['1'],
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
      name: this.foodForm.value.name!,
      id: this.foodForm.value.id!,
      caloriesPer100g: this.foodForm.value.caloriesPer100g!,
      weight: this.foodForm.value.weight!,
      nutriScore: this.foodForm.value.nutriScore!,
      tags: this.foodForm.value.tags!,
    };
  }
}
