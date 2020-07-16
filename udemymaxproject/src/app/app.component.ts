import { Component } from '@angular/core';
// import { ngModel } from '@angular/forms';
import { Recipe } from "./recipes/recipe.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'udemymaxproject';
  // recipe : Recipe = new Recipe('','','');
  createAndAddRecipe(recipeRcvd : Recipe){
  this.recipes.push(recipeRcvd);
  };

  recipes : Recipe [] =[
    new Recipe('Ghora Murgi', 'Grilled Chicken', 'https://i.pinimg.com/236x/67/02/a5/6702a55befb0b631647f8906f45af5c0.jpg'),
    new Recipe('aal-fam', 'Aal-Fam', 'https://i.pinimg.com/474x/8a/d3/af/8ad3af7aa802de8067b86f0ec6de9e02.jpg'),
    new Recipe('Biriyani', 'Kolkata Biriyani', 'https://www.awesomecuisine.com/wp-content/uploads/2007/10/Chicken-Biryani_resized.jpg')
  ];
}
