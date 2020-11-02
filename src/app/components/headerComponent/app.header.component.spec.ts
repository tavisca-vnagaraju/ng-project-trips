import { TestBed, ComponentFixture, async } from "@angular/core/testing";

import { AppHeaderComponent } from './app.header.component';

describe('AppHeaderComponent',()=>{
    let component:AppHeaderComponent;
    let fixture:ComponentFixture<AppHeaderComponent>;
    let textElement:HTMLElement;
    beforeEach(() => {
        TestBed.configureTestingModule({
          declarations: [AppHeaderComponent]
        }).compileComponents(); 
    });
    beforeEach(() => {
       fixture = TestBed.createComponent(AppHeaderComponent);
       component = fixture.componentInstance;
       fixture.detectChanges();
    });
    it('should give header text', () => {
        const element = fixture.nativeElement;
        fixture.detectChanges();
        textElement = element.querySelector('mat-toolbar span');
        expect(textElement.innerHTML).toEqual('App Name');
    });
});