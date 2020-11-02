import { TestBed, ComponentFixture, async } from "@angular/core/testing";

import { TripsListComponent } from './app.trips-list.component';

describe('AdditionComponent',()=>{
    let component:TripsListComponent;
    let fixture:ComponentFixture<TripsListComponent>;
    let textElement:HTMLElement;
    beforeEach(() => {
        // defin the TestBedConfiguration
        TestBed.configureTestingModule({
          declarations: [TripsListComponent]
        }).compileComponents(); 
    });
    beforeEach(() => {
       fixture = TestBed.createComponent(TripsListComponent);
       component = fixture.componentInstance;
       fixture.detectChanges();
    });
    it('should give heading', () => {
        const element = fixture.nativeElement;
        fixture.detectChanges();
        textElement = element.querySelector('h1');
        expect(textElement.innerHTML).toEqual("Trips Folder");
    });
});