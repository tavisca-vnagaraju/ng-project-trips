import { fakeAsync } from '@angular/core/testing';
import { of } from 'rxjs';
import {FlightService} from './app.flight.service';

describe('Car Service',()=>{
    let service:FlightService;
    const http = jest.fn();

    beforeEach(()=>{
        service = new FlightService(http as any);
    });

    describe('car service',()=>{
        it('should call getFlightBookingDetailsById ' , fakeAsync(()=>{
            const response = {
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
                "journeyTime": "4Hrs",
            };
            const httpMock = {
                get:jest.fn().mockReturnValue(of(response))
            };
            const serviceMock = new FlightService(httpMock  as any);
            serviceMock.getFlightBookingDetailsById("jbns").subscribe(
                (data)=>{
                    expect(httpMock.get).toBeDefined();
                    expect(httpMock.get).toHaveBeenCalled();
                    expect(data.id).toBe("FLB741589K");
                }
            )
        }));
        it('should call cancelFlightByIds', fakeAsync(()=>{
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
            };
            const httpMock = {
                put:jest.fn().mockReturnValue(of(cancelled))
            }
            const serviceMock = new FlightService(httpMock as any);
            serviceMock.cancelFlightByIds("jsdjkcsd","chsdkj").subscribe(
                (data)=>{
                    expect(httpMock.put).toBeDefined();
                    expect(httpMock.put).toHaveBeenCalled();
                    expect(data.trips_details.id).toBe("748693");
                    expect(data.trips_details.flightInfo.status).toBe("Cancelled");
                }
            )
        }));
    });
})