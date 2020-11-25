import { fakeAsync } from '@angular/core/testing';
import { of } from 'rxjs';
import {TripsService} from './app.trips.service';

describe('Trips Service',()=>{
    let service:TripsService;
    const http = jest.fn();

    beforeEach(()=>{
        service = new TripsService(http as any);
    });

    describe('trips service',()=>{
        it('should call getTripDetailsById ' , fakeAsync(()=>{
            const response = {
                "id": "748693",
                "status": "Booked",
                "bookedDate": "18-10-2020",
                "startDate": "20-12-2020",
                "endDate": "22-12-2020",
                "totalCost": "13000",
                "currencyCode": "USD"
            };
            const httpMock = {
                get:jest.fn().mockReturnValue(of(response))
            };
            const serviceMock = new TripsService(httpMock as any);
            serviceMock.getTripDetailsById("fhdjsc").subscribe(
                (data)=>{
                    expect(httpMock.get).toBeDefined();
                    expect(httpMock.get).toHaveBeenCalled();
                    expect(data.id).toBe("748693");
                    expect(data.status).toBe("Booked");
                }
            )
        }));
        it('should call get all trips',fakeAsync(()=>{
            const response = [
                {
                    "id": "String",
                    "status": "String",
                    "bookedDate": "String",
                    "startDate": "String",
                    "endDate": "String",
                    "cancelledDate": "String",
                    "totalCost": "String",
                    "currencyCode": "String"
                },
                {
                    "id": "748693",
                    "status": "Booked",
                    "bookedDate": "18-10-2020",
                    "startDate": "20-12-2020",
                    "endDate": "22-12-2020",
                    "totalCost": "13000",
                    "currencyCode": "USD"
                },
                {
                    "id": "754132",
                    "status": "Booked",
                    "bookedDate": "25-10-2020",
                    "startDate": "10-12-2020",
                    "endDate": "12-12-2020",
                    "totalCost": "12500",
                    "currencyCode": "USD"
                }
            ];
            const httpMock = {
                get:jest.fn().mockReturnValue(of(response))
            };
            const serviceMock = new TripsService(httpMock as any);
            serviceMock.getAllTrips().subscribe(
                (data)=>{
                    expect(httpMock.get).toBeDefined();
                    expect(httpMock.get).toHaveBeenCalled();
                    expect(data.length).toBe(3);
                }
            )
        }));
    });
});