import { Component } from '@angular/core';

@Component({
    selector:'app-addition-component',
    templateUrl: './app.addition.component.html'
})

export class AdditionComponent{
    number1:number;
    number2:number;
    answer:number;
    Add():void{
        this.answer = this.add(10,20);
    }
    add(number1,number2):number{
        if(number1 + number2 >= 30){
            return number1+number2;
        }else{
            return 0 ;
        }
    }
}