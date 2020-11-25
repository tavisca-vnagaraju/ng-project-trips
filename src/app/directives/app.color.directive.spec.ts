import { TestBed, ComponentFixture } from '@angular/core/testing';
import { Component, DebugElement } from "@angular/core";
import { By } from "@angular/platform-browser";
import { ColorDirective } from './app.color.directive';

@Component({
    template: `<h1  setColor> hello </h1>`
})
class TestColorHoverComponent {
}


describe('Directive: ColorHover', () => {

    let component: TestColorHoverComponent;
    let fixture: ComponentFixture<TestColorHoverComponent>;
    let inputElement: DebugElement;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [TestColorHoverComponent, ColorDirective]
        });
        fixture = TestBed.createComponent(TestColorHoverComponent);
        component = fixture.componentInstance;
        inputElement = fixture.debugElement.query(By.css('h1'));
    });

    it('hovering over h1', () => {
        inputElement.triggerEventHandler('mouseenter',null);
        fixture.detectChanges();
        expect(inputElement.nativeElement.style.backgroundColor).toBe("rgb(255, 255, 255)");

        inputElement.triggerEventHandler('mouseleave', null);
        fixture.detectChanges();
        expect(inputElement.nativeElement.style.backgroundColor).toBe("rgb(103, 58, 183)");
    });
});