import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { FoodsState } from './foods.state';

@Component({
  selector: 'app-foods',
  templateUrl: './foods.component.html',
  styleUrls: ['./foods.component.scss'],
})
export class FoodsComponent implements OnInit {
  response$ = this.state.foods$;
  foodForm = this.fb.group({
    name: ['Cottage cheese'],
    id: ['1'],
    caloriesPer100g: [100],
    weight: [100],
  });

  constructor(private state: FoodsState, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.state.getFoods();
  }
}
