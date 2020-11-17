import { fakeAsync } from '@angular/core/testing';
import { of } from 'rxjs';
import {HotelService} from './app.hotel.service';

describe('Car Service',()=>{
    let service:HotelService;
    const http = jest.fn();

    beforeEach(()=>{
        service = new HotelService(http as any);
    });

    describe('hotel service',()=>{
        it('should call getHotelBookingDetailsById ' , fakeAsync(()=>{
            const response = {
                "id": "HTB741589K",
                "status": "Booked",
                "hotelId": "HT741578",
                "locationCode": "LAS",
                "location": "Las Vegas at Mandalay Bay",
                "startDate": "18-11-2020",
                "endDate": "20-11-2020",
                "roomType": "Deluxe Room",
                "roomNumber": "505",
                "adults": 2,
                "children": 0,
                "numberOfDays": "3",
            };
            const httpMock = {
                get:jest.fn().mockReturnValue(of(response))
            };
            const serviceMock = new HotelService(httpMock  as any);
            serviceMock.getHotelBookingDetailsById("jbns").subscribe(
                (data)=>{
                    expect(httpMock.get).toBeDefined();
                    expect(httpMock.get).toHaveBeenCalled();
                    expect(data.id).toBe("HTB741589K");
                }
            )
        }));
        it('should call cancelHotelByIds', fakeAsync(()=>{
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
            };
            const httpMock = {
                put:jest.fn().mockReturnValue(of(cancelled))
            }
            const serviceMock = new HotelService(httpMock as any);
            serviceMock.cancelHotelByIds("jsdjkcsd","chsdkj").subscribe(
                (data)=>{
                    expect(httpMock.put).toBeDefined();
                    expect(httpMock.put).toHaveBeenCalled();
                    expect(data.trips_details.id).toBe("748693");
                    expect(data.trips_details.hotelInfo.status).toBe("Cancelled");
                }
            )
        }));
    });
})