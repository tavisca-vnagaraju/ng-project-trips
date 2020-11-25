import { Component } from '@angular/core';
import { TestingService } from 'src/app/testing.service';

@Component({
    selector:'app-addition-component',
    templateUrl: './app.addition.component.html'
})

export class AdditionComponent{
    categories: any;
    constructor(private testService:TestingService){}
    ngOnInit(){
        this.testService.getCategories().subscribe(
            data=>this.categories=data
        )
    }
    number1:number = 10;
    number2:number = 20;
    answer:number;
    Add():void{
        this.answer = this.add(this.number1,this.number2);
    }
    add(number1,number2):number{
        if(number1 + number2 >= 30){
            return number1+number2;
        }else{
            return 100 ;
        }
    }
}