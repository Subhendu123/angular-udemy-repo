import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  recipe : Recipe = new Recipe('','','https://www.awesomecuisine.com/wp-content/uploads/2007/10/Chicken-Biryani_resized.jpg');
  //@Output() saveRecipe = new EventEmitter<{name : string, description : string, location : string}> ();
  @Output() saveRecipe = new EventEmitter<Recipe> ();
  savingRecipes(){
    // this.saveRecipe.emit({name : this.recipe.name, description : this.recipe.description, location : this.recipe.location});
    this.saveRecipe.emit(this.recipe);
  };

  constructor() { }

  ngOnInit(): void {
  }

}
