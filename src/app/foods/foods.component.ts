import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Food } from './foods.model';
import { FoodsState } from './foods.state';
import { TagsState } from './tags.state';

interface FoodForm {
  name: FormControl<string | null>;
  caloriesPer100g: FormControl<number | null>;
  weight: FormControl<number | null>;
  nutriScore: FormControl<string | null>;
  tags: FormControl<string | null>;
}

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

  private food$ = this.foodsState.food$;

  foodForm = this.fb.group<FoodForm>({
    name: this.fb.control('', [Validators.required]),
    caloriesPer100g: this.fb.control(null, [Validators.required]),
    weight: this.fb.control(null, [Validators.required]),
    nutriScore: this.fb.control('', [Validators.required]),
    tags: this.fb.control('', [Validators.required]),
  });

  ngOnInit(): void {
    this.foodsState.getFoods();
    this.tagsState.getTags();

    this.food$.subscribe((food) => {
      this.foodForm.patchValue(food);
    });
  }

  getData() {
    this.foodsState.getFoodById(1);
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
