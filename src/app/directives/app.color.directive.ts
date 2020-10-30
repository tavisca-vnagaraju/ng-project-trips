import {Directive, ElementRef, Renderer2, HostListener } from '@angular/core';
@Directive({
  selector: '[setColor]'
})
export class ColorDirective {
  constructor(private ele: ElementRef, private renderer: Renderer2) { }

  private applyBackgroundColor(color: string): void {
    this.renderer.setStyle(this.ele.nativeElement,
       'backgroundColor', color);
  }
  private applyBorder():void{
    this.renderer.setStyle(this.ele.nativeElement,'border','2px solid #673ab7');
  }
  private applyColor(color:string){
    this.renderer.setStyle(this.ele.nativeElement,'color',color);
  }
  @HostListener('mouseenter')
  mouseenter(): void {
    this.applyBackgroundColor("#fff");
    this.applyBorder();
    this.applyColor("#673ab7");
  }

  @HostListener('mouseleave')
  mouseleave(): void {
    this.applyBackgroundColor("#673ab7");
    this.applyColor("#fff");
  }
}
