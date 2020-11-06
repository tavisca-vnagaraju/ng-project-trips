import {  fakeAsync, tick } from "@angular/core/testing";
import { of, throwError } from 'rxjs';

import { TripsListComponent } from './app.trips-list.component';

describe('TripsListComponent',()=>{
    let fixture:TripsListComponent;
    let tripServiceMock:any;
    let routerMock:any;
    beforeEach(()=>{
        tripServiceMock = {
            getAllTrips:jest.fn(),
        };
        routerMock = {
			navigate: jest.fn()
		};
        fixture  = new TripsListComponent(tripServiceMock,routerMock);
    });
    describe("constrctor trips test",()=>{
        it("should get trips",fakeAsync(()=>{
            const data = [
                {
                    "id": "748693",
                    "status": "Booked",
                    "bookedDate": "18-10-2020",
                    "startDate": "20-12-2020",
                    "endDate": "22-12-2020",
                    "totalCost": "13000",
                    "currencyCode": "USD"
                }
            ];
            spyOn(tripServiceMock,'getAllTrips').and.returnValue(of(data));
            fixture.ngOnInit();
            tick(1000);
            expect(fixture.trips.length).toEqual(1);
        }));
        it('should test error get trips',fakeAsync(()=>{
            spyOn(tripServiceMock,'getAllTrips').and.returnValue(throwError({status:400}));
            fixture.ngOnInit();
            tick(1000);
            expect(fixture.errorResponse.status).toEqual(400);
        }));
        it('should have color red',fakeAsync(()=>{
            const data = [
                {
                    "id": "748693",
                    "status": "Cancelled",
                    "bookedDate": "18-10-2020",
                    "startDate": "20-12-2020",
                    "endDate": "22-12-2020",
                    "totalCost": "13000",
                    "currencyCode": "USD"
                }
            ];
            spyOn(tripServiceMock,'getAllTrips').and.returnValue(of(data));
            fixture.ngOnInit();
            tick(1000);
            expect(fixture.color).toEqual("red");
        }));
        it('should navigate to /trips/details page',()=>{
            fixture.cardClicked("748693");
            expect(routerMock.navigate).toHaveBeenCalled();
        });
    })
});