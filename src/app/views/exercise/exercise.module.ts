import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'

import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';

import {ExerciseComponent} from './exercise.component';

@NgModule({
  declarations:[
    ExerciseComponent
  ],
  imports: [
    MatCardModule,
    CommonModule,
    MatInputModule,
    MatButtonModule,
    FormsModule
  ],
  exports: [
    ExerciseComponent
  ]
})

export class ExerciseModule { }
