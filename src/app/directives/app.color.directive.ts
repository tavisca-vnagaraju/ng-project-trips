import { style } from '@angular/animations';
import {Directive, ElementRef, Renderer2, HostListener,HostBinding } from '@angular/core';
@Directive({
  selector: '[setColor]'
})
export class ColorDirective {
  
  @HostBinding("style.background-color") backgroundColor:string;
  @HostBinding("style.border") border:string;
  @HostBinding("style.color") color:string;

  @HostListener('mouseenter')
  mouseenter(): void {
    this.backgroundColor = "#fff";
    this.border = "2px solid #673ab7";
    this.color = "#673ab7";
  }

  @HostListener('mouseleave')
  mouseleave(): void {
    this.backgroundColor = "#673ab7";
    this.color = "#fff";
  }
}