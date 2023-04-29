import { Component, OnInit } from '@angular/core';
import { FoodsState } from './foods.state';

@Component({
  selector: 'app-foods',
  templateUrl: './foods.component.html',
  styleUrls: ['./foods.component.scss'],
})
export class FoodsComponent implements OnInit {
  response$ = this.state.foods$;

  constructor(private state: FoodsState) {}

  ngOnInit(): void {
    this.state.getFoods();
  }
}
