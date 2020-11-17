import { fakeAsync } from '@angular/core/testing';
import { of } from 'rxjs';
import {CarService} from './app.car.service';

describe('Car Service',()=>{
    let service:CarService;
    const http = jest.fn();

    beforeEach(()=>{
        service = new CarService(http as any);
    });

    describe('car service',()=>{
        it('should call getCarBookingDetailsById ' , fakeAsync(()=>{
            const response = {
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
            };
            const httpMock = {
                get:jest.fn().mockReturnValue(of(response))
            };
            const serviceMock = new CarService(httpMock  as any);
            serviceMock.getCarBookingDetailsById("jbns").subscribe(
                (data)=>{
                    expect(httpMock.get).toBeDefined();
                    expect(httpMock.get).toHaveBeenCalled();
                    expect(data.id).toBe("CAB784578K");
                }
            )
        }));
        it('should call cancelCarByIds', fakeAsync(()=>{
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
            };
            const httpMock = {
                put:jest.fn().mockReturnValue(of(cancelled))
            }
            const serviceMock = new CarService(httpMock as any);
            serviceMock.cancelCarByIds("jsdjkcsd","chsdkj").subscribe(
                (data)=>{
                    expect(httpMock.put).toBeDefined();
                    expect(httpMock.put).toHaveBeenCalled();
                    expect(data.trips_details.id).toBe("748693");
                    expect(data.trips_details.carInfo.status).toBe("Cancelled");
                }
            )
        }));
    });
})