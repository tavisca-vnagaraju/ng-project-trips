import { Component,  Input } from '@angular/core';

@Component({
    templateUrl: './app.heading.element.html'
})
export class HeadingElement{
    @Input() value:string;
}