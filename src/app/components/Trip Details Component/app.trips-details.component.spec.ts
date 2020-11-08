import { fakeAsync, tick } from '@angular/core/testing';
import { of, throwError } from 'rxjs';
import {TripsDetailsComponent} from './app.trips-details.component';

describe('TripsListComponent',()=>{
    let fixture:TripsDetailsComponent;
    let tripsServiceMock:any;
    let routeMock:any;

    beforeEach(()=>{
        tripsServiceMock = {
            getTripDetailsById:jest.fn()
        };
        routeMock = {
            params: of({
                id:"FS4FH67"
            })
        }
        fixture  = new TripsDetailsComponent(tripsServiceMock,routeMock);

    });
    describe("Test : Trips list component",()=>{
        const trips_details = {
            "isFlightBooked":true
        }
        it("should get trips",fakeAsync(()=>{
            spyOn(tripsServiceMock,'getTripDetailsById').and.returnValue(of(trips_details));
            spyOn(routeMock,'params').and.returnValue(of("h6yjj"));
            fixture.ngOnInit();
            tick(1000);
            expect(fixture.tripDetails.isFlightBooked).toEqual(true);
        }));
        it("should get error",fakeAsync(()=>{
            spyOn(tripsServiceMock,'getTripDetailsById').and.returnValue(throwError({status:500}));
            spyOn(routeMock,'params').and.returnValue(of("h6yjj"));
            fixture.ngOnInit();
            tick(1000);
            expect(fixture.errorResponse.status).toEqual(500);
        }));
        it('should give color green',()=>{
            fixture.tripDetails ={
                "id":"748693",
                "bookedDate":"18-10-2020",
                "status":"Booked",
                "totalCost":13000,
                "currencyCode":"USD",
                "isFlightBooked":true,
                "isHotelBooked":true,
                "isCarBooked":true,
                "flightBookingId":"FLB748693K",
                "hotelBookingId":"HTB748693K",
                "carBookingId":"CAB458452K",
                "flightInfo":{
                    "status":"Booked",
                    "sourceCode":"LAS",
                    "destinationCode":"LAX",
                    "startDate":"20-12-2020",
                    "endDate":"22-12-2020"
                },
                "hotelInfo":{
                    "status":"Booked",
                    "locationCode":"LAX",
                    "name":"Mayumi",
                    "startDate":"20-12-2020",
                    "endDate":"22-12-2020"
                },
                "carInfo": {
                    "status": "Booked",
                    "pickUpLocationCode": "LAS",
                    "dropOffLocationCode": "LAX",
                    "startDate": "25-11-2020",
                    "endDate": "28-11-2020"
                }
            }
            fixture.ngAfterContentChecked();
            expect(fixture.color).toEqual("green");
        });
        it('should give color red',()=>{
            fixture.tripDetails ={
                "id":"748693",
                "bookedDate":"18-10-2020",
                "status":"Cancelled",
                "totalCost":13000,
                "currencyCode":"USD",
                "isFlightBooked":true,
                "isHotelBooked":true,
                "isCarBooked":true,
                "flightBookingId":"FLB748693K",
                "hotelBookingId":"HTB748693K",
                "carBookingId":"CAB458452K",
                "flightInfo":{
                    "status":"Booked",
                    "sourceCode":"LAS",
                    "destinationCode":"LAX",
                    "startDate":"20-12-2020",
                    "endDate":"22-12-2020"
                },
                "hotelInfo":{
                    "status":"Booked",
                    "locationCode":"LAX",
                    "name":"Mayumi",
                    "startDate":"20-12-2020",
                    "endDate":"22-12-2020"
                },
                "carInfo": {
                    "status": "Booked",
                    "pickUpLocationCode": "LAS",
                    "dropOffLocationCode": "LAX",
                    "startDate": "25-11-2020",
                    "endDate": "28-11-2020"
                }
            }
            fixture.ngAfterContentChecked();
            expect(fixture.color).toEqual("red");
        });
        it('should update trips details',()=>{
            const tripDetails ={
                "id":"748693",
                "bookedDate":"18-10-2020",
                "status":"Cancelled",
                "totalCost":13000,
                "currencyCode":"USD",
                "isFlightBooked":true,
                "isHotelBooked":true,
                "isCarBooked":true,
                "flightBookingId":"FLB748693K",
                "hotelBookingId":"HTB748693K",
                "carBookingId":"CAB458452K",
                "flightInfo":{
                    "status":"Booked",
                    "sourceCode":"LAS",
                    "destinationCode":"LAX",
                    "startDate":"20-12-2020",
                    "endDate":"22-12-2020"
                },
                "hotelInfo":{
                    "status":"Booked",
                    "locationCode":"LAX",
                    "name":"Mayumi",
                    "startDate":"20-12-2020",
                    "endDate":"22-12-2020"
                },
                "carInfo": {
                    "status": "Booked",
                    "pickUpLocationCode": "LAS",
                    "dropOffLocationCode": "LAX",
                    "startDate": "25-11-2020",
                    "endDate": "28-11-2020"
                }
            }
            fixture.updateTripDetails(tripDetails);
            expect(fixture.tripDetails.id).toEqual("748693");
            expect(fixture.tripDetails.totalCost).toEqual(13000);
        });
    });
});