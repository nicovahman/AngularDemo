import { Component, OnInit } from '@angular/core';

import { Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Test', 'Dette er en test', 'https://tennisshoppen.dk/images/WILSON%20PRO%20STAFF%2025%20JUNIOR%20TENNISKETCHER%202.jpg'),
    new Recipe('Test', 'Dette er en test', 'https://tennisshoppen.dk/images/WILSON%20PRO%20STAFF%2025%20JUNIOR%20TENNISKETCHER%202.jpg'),
    new Recipe('Test', 'Dette er en test', 'https://tennisshoppen.dk/images/WILSON%20PRO%20STAFF%2025%20JUNIOR%20TENNISKETCHER%202.jpg')
  ];
  constructor() { }

  ngOnInit() {
  }

}
