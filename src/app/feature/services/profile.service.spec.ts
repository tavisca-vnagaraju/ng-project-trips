import { fakeAsync } from '@angular/core/testing';
import { of } from 'rxjs';
import { ProfileService } from './profile.service';

describe("profile service",()=>{
    let service:ProfileService;
    const http = jest.fn();

    beforeEach(()=>{
        service = new ProfileService(http as any);
    });
    describe('post profile service',()=>{
        it('should get profile', fakeAsync(()=>{
            const response = {
                "email": "vamsi8979@gmail.com",
                "name": "vamsi krishna",
                "nickname": "vamsi8979",
            }
            const httpMock = {
                get:jest.fn().mockReturnValue(of(response))
            };
            const serviceMock = new ProfileService(httpMock as any);
            serviceMock.getProfile("csdcs").subscribe(
                (data)=>{
                    expect(httpMock.get).toBeDefined();
                    expect(httpMock.get).toHaveBeenCalled();
                    expect(data.email).toBe("vamsi8979@gmail.com");
                }
            )
        }));
        it('should get address', fakeAsync(()=>{
            const response = {
                "addressLine1":"100010 South Connexions Loyalty Boulevard",
                "addressLine2":"Suite Northern Ireland MS 100011",
                "city":"Austin",
                "state":"Texas",
                "country":"United State",
                "zip":"73301"
            }
            const httpMock = {
                get:jest.fn().mockReturnValue(of(response))
            }
            const serviceMock = new ProfileService(httpMock as any);
            serviceMock.getAddress("csdcs").subscribe(
                (data)=>{
                    expect(httpMock.get).toBeDefined();
                    expect(httpMock.get).toHaveBeenCalled();
                    expect(data.zip).toBe("73301");
                }
            )
        }));
        it('should get card details', fakeAsync(()=>{
            const response = {
                "email":"vamsi8979@gmail.com",
                "CardNumber":"23133123",
                "CardHolderName":"23123213321321",
                "ExpirationMonth":"12",
                "ExpirationYear":"2020"
            }
            const httpMock = {
                get:jest.fn().mockReturnValue(of(response))
            }
            const serviceMock = new ProfileService(httpMock as any);
            serviceMock.getCardDetails("csdcs").subscribe(
                (data)=>{
                    expect(httpMock.get).toBeDefined();
                    expect(httpMock.get).toHaveBeenCalled();
                    expect(data.ExpirationYear).toBe("2020");
                }
            )
        }));
    });
    describe('post profiel service',()=>{
        it('should post profile', fakeAsync(()=>{
            const response = {
                "email": "vamsi8979@gmail.com",
                "name": "vamsi krishna",
                "nickname": "vamsi8979",
            }
            const httpMock = {
                post:jest.fn().mockReturnValue(of(response))
            };
            const serviceMock = new ProfileService(httpMock as any);
            serviceMock.postProfile("csdcs").subscribe(
                (data)=>{
                    expect(httpMock.post).toBeDefined();
                    expect(httpMock.post).toHaveBeenCalled();
                    expect(data.email).toBe("vamsi8979@gmail.com");
                }
            )
        }));
        it('should post address', fakeAsync(()=>{
            const response = {
                "addressLine1":"100010 South Connexions Loyalty Boulevard",
                "addressLine2":"Suite Northern Ireland MS 100011",
                "city":"Austin",
                "state":"Texas",
                "country":"United State",
                "zip":"73301"
            }
            const httpMock = {
                post:jest.fn().mockReturnValue(of(response))
            }
            const serviceMock = new ProfileService(httpMock as any);
            serviceMock.postAddress("csdcs").subscribe(
                (data)=>{
                    expect(httpMock.post).toBeDefined();
                    expect(httpMock.post).toHaveBeenCalled();
                    expect(data.zip).toBe("73301");
                }
            )
        }));
        it('should post card details', fakeAsync(()=>{
            const response = {
                "email":"vamsi8979@gmail.com",
                "CardNumber":"23133123",
                "CardHolderName":"23123213321321",
                "ExpirationMonth":"12",
                "ExpirationYear":"2020"
            }
            const httpMock = {
                post:jest.fn().mockReturnValue(of(response))
            }
            const serviceMock = new ProfileService(httpMock as any);
            serviceMock.postCardDetails("csdcs").subscribe(
                (data)=>{
                    expect(httpMock.post).toBeDefined();
                    expect(httpMock.post).toHaveBeenCalled();
                    expect(data.ExpirationYear).toBe("2020");
                }
            )
        }));
    });
});