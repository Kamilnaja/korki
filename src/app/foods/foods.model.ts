interface Food {
  name: string;
  id: string;
  caloriesPer100g: number;
  weight: number;
  nutriScore: string;
  tags: string;
}

export interface Response {
  data: Food[];
  lenght: number;
}
