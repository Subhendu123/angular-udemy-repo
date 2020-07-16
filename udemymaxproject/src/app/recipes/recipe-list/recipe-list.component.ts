import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipe.model';
//import template from '../../../images/download.jpg';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  @Input() recipeList : Recipe [];

  // recipes : Recipe [] =[
  //   new Recipe('Khabar', 'Khabar', ''),
  //   new Recipe('Khabar', 'Khabar', 'https://www.shutterstock.com/image-photo/healthy-food-clean-eating-selection-fruit-722718082')
  // ];
  constructor() { }

  ngOnInit(): void {
  }

}
