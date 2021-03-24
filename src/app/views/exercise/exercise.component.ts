import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercise',
  templateUrl: './exercise.component.html',
  styleUrls: ['./exercise.component.scss']
})
export class ExerciseComponent implements OnInit {
  firstNumber: number = 0;
  secondNumber: number = 0;
  result: number = null;

  showFeedback: boolean = false;
  feedbackValue: boolean = null;
  feedbackMessage: string ="";
  constructor() { }

  ngOnInit(): void {
    this.formNewEquation();
  }

  verifyAnswer(){
    console.log(this.result);
    if(!this.result){

    }
    if(this.firstNumber + this.secondNumber == this.result){
      this.feedbackMessage = "Correct!"
      this.feedbackValue = true;
    }else{
      this.feedbackMessage = "Incorrect. Try again!"
      this.feedbackValue = false;
    }
    this.showFeedback = true;
  }

  formNewEquation(){
    this.firstNumber=this.getRandomNumber(-100, 100);
    this.secondNumber=this.getRandomNumber(-100, 100);
    this.result=null;
    this.showFeedback=false;
    this.feedbackValue=null;
    this.feedbackMessage='';
  }

  getRandomNumber(min, max){
    return Math.floor(Math.random() * (max - min) + min);
  }

}
