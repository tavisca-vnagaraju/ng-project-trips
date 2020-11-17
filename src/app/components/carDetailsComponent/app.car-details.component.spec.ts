import {  fakeAsync, tick } from '@angular/core/testing';
import { of, throwError } from 'rxjs';
import { ConfirmDialogComponent } from '../confirmDialogCommponent/confirm-dialog.component';
import { CarDetailsComponent } from './app.car-details.component';

describe('CarDetailsComponent',()=>{
    let fixture:CarDetailsComponent;
    let carServiceMock:any;
    let dialogMock:any;
    let dilogRefMock:any;
    beforeEach(()=>{
        carServiceMock = {
            getCarBookingDetailsById:jest.fn(),
            cancelCarByIds:jest.fn()
        };
        dialogMock={
            open:jest.fn()
        };
        dilogRefMock={
            afterClosed:jest.fn()
        }
        fixture = new CarDetailsComponent(carServiceMock,dialogMock);
    });
    describe(" Car Details component Test",()=>{
        it('should call getCarBookingDetailsById to get car  booking details',fakeAsync(()=>{
            const carBookingDetails = {
                "id": "CAB784578K",
                "status": "Booked",
                "carId": "CA78945",
                "pickUpLocation": "Los Vegas, NV (LAS) McCarren International Airport",
                "dropOffLocation": "Los Angeles, CA (LAX) Los Angeles International Airport",
                "pickUpLocationCode": "LAS",
                "dropOffLocationCode": "LAX",
                "startDate": "25-11-2020",
                "endDate": "28-11-2020",
                "pickUpTime": "7:30 AM",
                "dropOffTime": "7:30 AM",
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
                "carBookingId":"CAB784578K",
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
            spyOn(carServiceMock,'getCarBookingDetailsById').and.returnValue(of(carBookingDetails));
            fixture.ngOnInit();
            expect(fixture.carBookingDetails.id).toEqual("CAB784578K");
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
            expect(fixture.carStatusColor).toEqual("green");
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
                    "status": "Cancelled",
                    "pickUpLocationCode": "LAS",
                    "dropOffLocationCode": "LAX",
                    "startDate": "25-11-2020",
                    "endDate": "28-11-2020"
                }
            }
            fixture.ngAfterContentChecked();
            expect(fixture.carStatusColor).toEqual("red");
        });
        it('should have expanded less false',()=>{
            spyOn(carServiceMock,'getCarBookingDetailsById').and.returnValue(of(undefined));
            fixture.expandLess("478511");
            expect(fixture.expanded).toBe(false);
            expect(carServiceMock.getCarBookingDetailsById).toHaveBeenCalled();
        });
        it('should have expanded more true',()=>{
            spyOn(carServiceMock,'getCarBookingDetailsById').and.returnValue(of(undefined));
            fixture.expandMore("478511");
            expect(fixture.expanded).toBe(true);
            expect(carServiceMock.getCarBookingDetailsById).toHaveBeenCalled();
        });
    });
    describe("negative Test",()=>{
        it('should not call getCarBookingDetailsById',fakeAsync(()=>{
            const carBookingDetails = {
                "_id": "5f8c0f9943cff031a8b00766",
                "id": "HTB741589K",
                "status": "Booked",
                "carId": "HT741578",
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
                "isHotelBooked":false,
                "isCarBooked":false,
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
            spyOn(carServiceMock,'getCarBookingDetailsById').and.returnValue(of(carBookingDetails));
            fixture.ngOnInit();
            expect(carServiceMock.getCarBookingDetailsById).not.toHaveBeenCalled();
        }));
        it('should be undefined car color',fakeAsync(()=>{
            fixture.tripDetails ={
                "id":"748693",
                "bookedDate":"18-10-2020",
                "status":"Booked",
                "totalCost":13000,
                "currencyCode":"USD",
                "isFlightBooked":true,
                "isHotelBooked":false,
                "isCarBooked":false,
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
            expect(fixture.carStatusColor).toBe(undefined);
        }));
        it('should have color status undefined',fakeAsync(()=>{
            fixture.tripDetails =  null;
            fixture.ngAfterContentChecked();
            expect(fixture.carStatusColor).toBe(undefined);
        }));
        it('should not called api method for expand more',()=>{
            fixture.carBookingDetails = {
                "id": "CAB784578K",
                "status": "Booked",
                "carId": "CA78945",
                "pickUpLocation": "Los Vegas, NV (LAS) McCarren International Airport",
                "dropOffLocation": "Los Angeles, CA (LAX) Los Angeles International Airport",
                "pickUpLocationCode": "LAS",
                "dropOffLocationCode": "LAX",
                "startDate": "25-11-2020",
                "endDate": "28-11-2020",
                "pickUpTime": "7:30 AM",
                "dropOffTime": "7:30 AM"
            }
            fixture.expandMore("478511");
            expect(fixture.expanded).toBe(true);
            expect(carServiceMock.getCarBookingDetailsById).not.toHaveBeenCalled();
        });
        it('should not called api method for expand less',()=>{
            fixture.carBookingDetails = {
                "id": "CAB784578K",
                "status": "Booked",
                "carId": "CA78945",
                "pickUpLocation": "Los Vegas, NV (LAS) McCarren International Airport",
                "dropOffLocation": "Los Angeles, CA (LAX) Los Angeles International Airport",
                "pickUpLocationCode": "LAS",
                "dropOffLocationCode": "LAX",
                "startDate": "25-11-2020",
                "endDate": "28-11-2020",
                "pickUpTime": "7:30 AM",
                "dropOffTime": "7:30 AM"
            }
            fixture.expandLess("478511");
            expect(fixture.expanded).toBe(false);
            expect(carServiceMock.getCarBookingDetailsById).not.toHaveBeenCalled();
        });
        it('should give error',()=>{
            spyOn(carServiceMock,'getCarBookingDetailsById').and.returnValue(throwError({status:500}));
            fixture.getCarBookingDetailsById("nvkdsvs");
            expect(fixture.errorResponse.status).toBe(500);
        });
    });
    describe("confirm dilog test",()=>{
        it('should have called confirm dilog and call API',()=>{
            spyOn(dialogMock,'open').and.returnValue(dilogRefMock);
            spyOn(dilogRefMock,'afterClosed').and.returnValue(of(false));
            spyOn(carServiceMock,'cancelCarByIds').and.returnValue(of({status:"Booked"}));
            fixture.confirmDialog();
            expect(carServiceMock.cancelCarByIds).not.toHaveBeenCalled();
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
                        "status": "Cancelled",
                        "pickUpLocationCode": "LAS",
                        "dropOffLocationCode": "LAX",
                        "startDate": "25-11-2020",
                        "endDate": "28-11-2020"
                    }
                }
            }
            spyOn(carServiceMock,'cancelCarByIds').and.returnValue(of(cancelled));
            fixture.cancelCar(true);
            tick(1000);
            expect(fixture.tripDetails.carInfo.status).toBe("Cancelled");
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