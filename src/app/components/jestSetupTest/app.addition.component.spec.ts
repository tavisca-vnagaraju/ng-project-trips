import { Component } from '@angular/core';
import { TestBed, ComponentFixture, async } from "@angular/core/testing";

import { AdditionComponent } from './app.addition.component';

describe('AdditionComponent',()=>{
    let component:AdditionComponent;
    let fixture:ComponentFixture<AdditionComponent>;
    let button:HTMLElement;
    let textElement:HTMLElement;
    beforeEach(() => {
        // defin the TestBedConfiguration
        TestBed.configureTestingModule({
          declarations: [AdditionComponent]
        }).compileComponents(); 
    });
    beforeEach(() => {
       fixture = TestBed.createComponent(AdditionComponent);
       component = fixture.componentInstance;
       fixture.detectChanges();
    });
    it('should give answer when loaded', () => {
        const element = fixture.nativeElement;
        button = element.querySelector('.button');
        const eventType = button.dispatchEvent(new Event('click'));
        fixture.detectChanges();
        textElement = element.querySelector('.answer');
        expect(textElement.innerHTML).toEqual('30');
    });
});