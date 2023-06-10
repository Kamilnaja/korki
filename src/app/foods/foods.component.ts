import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Food } from './foods.model';
import { FoodsState } from './foods.state';
import { TagsState } from './tags.state';

@Component({
  selector: 'app-foods',
  templateUrl: './foods.component.html',
  styleUrls: ['./foods.component.scss'],
})
export class FoodsComponent implements OnInit {
  private foodsState = inject(FoodsState);
  private tagsState = inject(TagsState);
  private fb = inject(FormBuilder);

  foods$ = this.foodsState.foods$;
  tags$ = this.tagsState.tags$;

  foodForm = this.fb.group({
    name: ['', [Validators.required]],
    caloriesPer100g: [null, [Validators.required]],
    weight: [null, [Validators.required]],
    nutriScore: ['', [Validators.required]],
    tags: ['', [Validators.required]],
  });

  ngOnInit(): void {
    this.foodsState.getFoods();
    this.tagsState.getTags();
  }

  onSubmit(): void {
    if (this.foodForm.invalid) {
      return;
    }
    const food: Food = this.mapFormToFood();
    this.foodsState.postFood(food);
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
