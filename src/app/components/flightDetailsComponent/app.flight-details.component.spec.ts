import {  fakeAsync, tick } from '@angular/core/testing';
import { of, throwError } from 'rxjs';
import { ConfirmDialogComponent } from '../confirmDialogCommponent/confirm-dialog.component';
import { FlightDetailsComponent } from './app.flight-details.component';

describe('FlightDetailsComponent',()=>{
    let fixture:FlightDetailsComponent;
    let flightServiceMock:any;
    let dialogMock:any;
    let dilogRefMock:any;
    beforeEach(()=>{
        flightServiceMock = {
            getFlightBookingDetailsById:jest.fn(),
            cancelFlightByIds:jest.fn()
        };
        dialogMock={
            open:jest.fn()
        };
        dilogRefMock={
            afterClosed:jest.fn()
        }
        fixture = new FlightDetailsComponent(flightServiceMock,dialogMock);
    });
    describe(" Flight Details component Test",()=>{
        it('should call getFlightBookingDetailsById to get flight booking details',fakeAsync(()=>{
            const flightBookingDetails = {
                "_id": "5f8c0f9943cff031a8b00766",
                "id": "HTB741589K",
                "status": "Booked",
                "flightId": "HT741578",
                "locationCode": "LAS",
                "location": "Las Vegas at Mandalay Bay",
                "startDate": "18-11-2020",
                "endDate": "20-11-2020",
                "roomType": "Deluxe Room",
                "roomNumber": "505",
                "adults": 2,
                "children": 0,
                "numberOfDays": "3",
                "__v": 0
            }
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
            spyOn(flightServiceMock,'getFlightBookingDetailsById').and.returnValue(of(flightBookingDetails));
            fixture.ngOnInit();
            expect(fixture.flightBookingDetails.flightId).toEqual("HT741578");
        }));
        it('should be green if booked',()=>{
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
            expect(fixture.flightStatusColor).toEqual("green");
        });
        it('should be red if not booked',()=>{
            fixture.tripDetails ={
                "id":"748693",
                "bookedDate":"18-10-2020",
                "status":"Partially Cancelled",
                "totalCost":13000,
                "currencyCode":"USD",
                "isFlightBooked":true,
                "isHotelBooked":true,
                "isCarBooked":true,
                "flightBookingId":"FLB748693K",
                "hotelBookingId":"HTB748693K",
                "carBookingId":"CAB458452K",
                "flightInfo":{
                    "status":"Cancelled",
                    "sourceCode":"LAS",
                    "destinationCode":"LAX",
                    "startDate":"20-12-2020",
                    "endDate":"22-12-2020"
                },
                "hotelInfo":{
                    "status":"Cancelled",
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
            expect(fixture.flightStatusColor).toEqual("red");
        });
        it('should have expanded less false',()=>{
            spyOn(flightServiceMock,'getFlightBookingDetailsById').and.returnValue(of(undefined));
            fixture.expandLess("478511");
            expect(fixture.expanded).toBe(false);
            expect(flightServiceMock.getFlightBookingDetailsById).toHaveBeenCalled();
        });
        it('should have expanded more true',()=>{
            spyOn(flightServiceMock,'getFlightBookingDetailsById').and.returnValue(of(undefined));
            fixture.expandMore("478511");
            expect(fixture.expanded).toBe(true);
            expect(flightServiceMock.getFlightBookingDetailsById).toHaveBeenCalled();
        });
    });
    describe("negative Test",()=>{
        it('should not call getFlightBookingDetailsById',fakeAsync(()=>{
            const flightBookingDetails = {
                "_id": "5f8c0f9943cff031a8b00766",
                "id": "HTB741589K",
                "status": "Booked",
                "flightId": "HT741578",
                "locationCode": "LAS",
                "location": "Las Vegas at Mandalay Bay",
                "startDate": "18-11-2020",
                "endDate": "20-11-2020",
                "roomType": "Deluxe Room",
                "roomNumber": "505",
                "adults": 2,
                "children": 0,
                "numberOfDays": "3",
                "__v": 0
            }
            fixture.tripDetails ={
                "id":"748693",
                "bookedDate":"18-10-2020",
                "status":"Booked",
                "totalCost":13000,
                "currencyCode":"USD",
                "isFlightBooked":false,
                "isHotelBooked":false,
                "isCarBooked":true,
                "flightBookingId":"FLB748693K",
                "hotelBookingId":"HTB748693K",
                "carBookingId":"CAB458452K",
                "flightInfo":{
                    "status":"",
                    "sourceCode":"",
                    "destinationCode":"",
                    "startDate":"",
                    "endDate":""
                },
                "hotelInfo":{
                    "status":"",
                    "locationCode":"",
                    "name":"",
                    "startDate":"",
                    "endDate":""
                },
                "carInfo": {
                    "status": "Booked",
                    "pickUpLocationCode": "LAS",
                    "dropOffLocationCode": "LAX",
                    "startDate": "25-11-2020",
                    "endDate": "28-11-2020"
                }
            }
            spyOn(flightServiceMock,'getFlightBookingDetailsById').and.returnValue(of(flightBookingDetails));
            fixture.ngOnInit();
            expect(flightServiceMock.getFlightBookingDetailsById).not.toHaveBeenCalled();
        }));
        it('should have flight color undefined',fakeAsync(()=>{
            fixture.tripDetails ={
                "id":"748693",
                "bookedDate":"18-10-2020",
                "status":"Booked",
                "totalCost":13000,
                "currencyCode":"USD",
                "isFlightBooked":false,
                "isHotelBooked":false,
                "isCarBooked":false,
                "flightBookingId":"FLB748693K",
                "hotelBookingId":"HTB748693K",
                "carBookingId":"CAB458452K",
                "flightInfo":{
                    "status":"",
                    "sourceCode":"",
                    "destinationCode":"",
                    "startDate":"",
                    "endDate":""
                },
                "hotelInfo":{
                    "status":"",
                    "locationCode":"",
                    "name":"",
                    "startDate":"",
                    "endDate":""
                },
                "carInfo": {
                    "status": "",
                    "pickUpLocationCode": "",
                    "dropOffLocationCode": "",
                    "startDate": "",
                    "endDate": ""
                }
            }
            fixture.ngAfterContentChecked();
            expect(fixture.flightStatusColor).toBe(undefined);
        }));
        it('should have color status undefined',fakeAsync(()=>{
            fixture.tripDetails = null;
            fixture.ngAfterContentChecked();
            expect(fixture.flightStatusColor).toBe(undefined);
        }));
        it('should not get called api method for expand more',()=>{
            fixture.flightBookingDetails = {
                "id": "FLB741589K",
                "status": "Booked",
                "flightId": "FL741578",
                "sourceCode": "LAS",
                "destinationCode": "LAX",
                "source": "Los Vegas, NV (LAS) McCarren International Airport",
                "destination": "Los Angeles, CA (LAX) Los Angeles International Airport",
                "startDate": "13-11-2020",
                "endDate": "14-11-2020",
                "startTime": "7:30 AM",
                "endTime": "11:30 AM",
                "adults": 2,
                "children": 0,
                "journeyTime": "4Hrs"
            }
            fixture.expandMore("478511");
            expect(fixture.expanded).toBe(true);
            expect(flightServiceMock.getFlightBookingDetailsById).not.toHaveBeenCalled();
        });
        it('should not get called api method for expand less',()=>{
            fixture.flightBookingDetails = {
                "id": "FLB741589K",
                "status": "Booked",
                "flightId": "FL741578",
                "sourceCode": "LAS",
                "destinationCode": "LAX",
                "source": "Los Vegas, NV (LAS) McCarren International Airport",
                "destination": "Los Angeles, CA (LAX) Los Angeles International Airport",
                "startDate": "13-11-2020",
                "endDate": "14-11-2020",
                "startTime": "7:30 AM",
                "endTime": "11:30 AM",
                "adults": 2,
                "children": 0,
                "journeyTime": "4Hrs"
            }
            fixture.expandLess("478511");
            expect(fixture.expanded).toBe(false);
            expect(flightServiceMock.getFlightBookingDetailsById).not.toHaveBeenCalled();
        });
        it('should give error',()=>{
            spyOn(flightServiceMock,'getFlightBookingDetailsById').and.returnValue(throwError({status:500}));
            fixture.getFlightBookingDetailsById("nvkdsvs");
            expect(fixture.errorResponse.status).toBe(500);
        });
    });
    describe("confirm dilog test",()=>{
        it('should have called confirm dilog and call API',()=>{
            spyOn(dialogMock,'open').and.returnValue(dilogRefMock);
            spyOn(dilogRefMock,'afterClosed').and.returnValue(of(false));
            spyOn(flightServiceMock,'cancelFlightByIds').and.returnValue(of({status:"Booked"}));
            fixture.confirmDialog();
            expect(flightServiceMock.cancelFlightByIds).not.toHaveBeenCalled();
        });
    });
    describe("cancel test",()=>{
        it('should cancel the compoent',fakeAsync(()=>{
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
            const cancelled = {
                trips_details:{
                    "id":"748693",
                    "bookedDate":"18-10-2020",
                    "status":"Partially Cancelled",
                    "totalCost":13000,
                    "currencyCode":"USD",
                    "isFlightBooked":true,
                    "isHotelBooked":true,
                    "isCarBooked":true,
                    "flightBookingId":"FLB748693K",
                    "hotelBookingId":"HTB748693K",
                    "carBookingId":"CAB458452K",
                    "flightInfo":{
                        "status":"Cancelled",
                        "sourceCode":"LAS",
                        "destinationCode":"LAX",
                        "startDate":"20-12-2020",
                        "endDate":"22-12-2020"
                    },
                    "hotelInfo":{
                        "status":"Cancelled",
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
            }
            spyOn(flightServiceMock,'cancelFlightByIds').and.returnValue(of(cancelled));
            fixture.cancelFlight(true);
            tick(1000);
            expect(fixture.tripDetails.flightInfo.status).toBe("Cancelled");
        }));
    });

});

describe('ConfirmDialogComponent',()=>{
    let fixture:ConfirmDialogComponent;
    let dialogRefMock:any;
    let dataMock:any;

    beforeEach(()=>{
        dialogRefMock = {
            close:jest.fn()
        }
        dataMock = {
            title:"test dilog",
            message:"are you sure"
        }
        fixture = new ConfirmDialogComponent(dialogRefMock,dataMock);
    });
    describe("ConfirmDilog Test",()=>{
        it('should call constructor',()=>{
            expect(fixture.title).toBe("test dilog");
            expect(fixture.message).toBe("are you sure");
        });
        it('should call on confirm with true',()=>{
            spyOn(dialogRefMock,'close');
            fixture.onConfirm();
            expect(dialogRefMock.close).toHaveBeenCalledWith(true);
        });
        it('should call on onDismiss with false',()=>{
            spyOn(dialogRefMock,'close');
            fixture.onDismiss();
            expect(dialogRefMock.close).toHaveBeenCalledWith(false);
        });
    });
});