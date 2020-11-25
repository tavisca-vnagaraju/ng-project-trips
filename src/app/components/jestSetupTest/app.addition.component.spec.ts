import { fakeAsync, tick } from '@angular/core/testing';
import { of } from 'rxjs';
import { TripsList } from 'src/app/models/app.trips-list.model';
import { AdditionComponent } from './app.addition.component';

describe('AdditionComponent',() => {

    let fixture:AdditionComponent;
    let testServiceMock:any;

    beforeEach(()=>{
        testServiceMock = {
            getCategories:jest.fn(),
        };
        fixture  = new AdditionComponent(testServiceMock);
    });
    describe("Add testing",()=>{
        it('should give answer when loaded', () => {
            fixture.number1 = 10;
            fixture.number2 = 20;
            fixture.Add();
            
            expect(fixture.answer).toEqual(30);
        });
        it('should be 0 if less than 30',() => {
            fixture.number1 = 10;
            fixture.number2 = 10;
            fixture.Add();
            expect(fixture.answer).toEqual(100);
        });
    })
    describe("ngOnInit test",()=>{
        it('should get categories',fakeAsync(()=>{
            const mockObject = [
                "animal"
            ];
            spyOn(testServiceMock,"getCategories").and.returnValue(of(mockObject));
            fixture.ngOnInit();
            tick(1000);
            expect(fixture.categories.length).toEqual(1);
        }));
    });
});