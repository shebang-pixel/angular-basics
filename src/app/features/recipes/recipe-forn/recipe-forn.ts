import { Component, output } from '@angular/core';
import { FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-recipe-forn',
  imports: [ReactiveFormsModule],
  templateUrl: './recipe-forn.html',
  styleUrl: './recipe-forn.css',
})
export class RecipeForn {
  recipeForm = new FormGroup({
    title: new FormControl('',
      [
        Validators.required,
        Validators.minLength(3),
      ]
    )
  });

  // form 

  recipeAdded = output<string>();

  // emmit
  onSubmit() {
    const title = this.recipeForm.value.title ?? ';'
    this.recipeAdded.emit(title);
    console.log(title);
    this.recipeForm.reset();

  }

}
