import { fakeAsync, tick } from '@angular/core/testing';
import { of, throwError } from 'rxjs';
import  { UserProfileInfoComponent } from './user-profile-info.component';

describe('UserProfileInfoComponent',()=>{
    let fixture:UserProfileInfoComponent;
    let loginServiceMock:any;
    let profileServiceMock:any;
    loginServiceMock = {
        getUserInfo:jest.fn()
    };
    profileServiceMock = {
        getProfile:jest.fn(),
        getAddress:jest.fn(),
        getCardDetails:jest.fn()
    }
    fixture = new UserProfileInfoComponent(loginServiceMock,profileServiceMock);
    describe("ngOnInit Test",()=>{
        it('should call get user profile information ',fakeAsync(()=>{
            const user = {
                "email": "vamsi8979@gmail.com",
                "name": "vamsi krishna",
                "nickname": "vamsi8979",
            }
            const address = {
                    addressLine1:"100010 South Connexions Loyalty Boulevard",
                    addressLine2:"Suite Northern Ireland MS 100011",
                    city:"Austin",
                    state:"Texas",
                    country:"United State",
                    zip:"73301"
            }
            const card={
                email:"vamsi8979@gmail.com",
                CardNumber:"23133123",
                CardHolderName:"23123213321321",
                ExpirationMonth:"12",
                ExpirationYear:"2020"
            }
            spyOn(loginServiceMock,'getUserInfo').and.returnValue(of(user));
            spyOn(profileServiceMock,'getProfile').and.returnValue(of(user));
            spyOn(profileServiceMock,'getAddress').and.returnValue(of(address));
            spyOn(profileServiceMock,"getCardDetails").and.returnValue(of(card));
            fixture.ngOnInit();
            tick(1000);
            expect(fixture.userInfo.email).toEqual("vamsi8979@gmail.com");
            expect(fixture.address.city).toEqual("Austin");
            expect(fixture.cardDetails.ExpirationYear).toEqual("2020");
        }));
        it('should have email if get user is null',fakeAsync(()=>{
            const user = {
                "email": "vamsi8979@gmail.com",
                "name": "vamsi krishna",
                "nickname": "vamsi8979",
            }
            const address = {
                    addressLine1:"100010 South Connexions Loyalty Boulevard",
                    addressLine2:"Suite Northern Ireland MS 100011",
                    city:"Austin",
                    state:"Texas",
                    country:"United State",
                    zip:"73301"
            }
            const card={
                email:"vamsi8979@gmail.com",
                CardNumber:"23133123",
                CardHolderName:"23123213321321",
                ExpirationMonth:"12",
                ExpirationYear:"2020"
            }
            spyOn(loginServiceMock,'getUserInfo').and.returnValue(of(user));
            spyOn(profileServiceMock,'getProfile').and.returnValue(of(null));
            spyOn(profileServiceMock,'getAddress').and.returnValue(of(address));
            spyOn(profileServiceMock,"getCardDetails").and.returnValue(of(card));
            fixture.ngOnInit();
            tick(1000);
            expect(fixture.profile.email).toEqual("vamsi8979@gmail.com");
        }));
        it('should throw error user profile information ',fakeAsync(()=>{
            const user = {
                "email": "vamsi8979@gmail.com",
                "name": "vamsi krishna",
                "nickname": "vamsi8979",
            }
            spyOn(loginServiceMock,'getUserInfo').and.returnValue(of(user));
            spyOn(profileServiceMock,'getProfile').and.returnValue(throwError({status:500}));
            spyOn(profileServiceMock,'getAddress').and.returnValue(of(null));
            spyOn(profileServiceMock,"getCardDetails").and.returnValue(of(null));
            fixture.ngOnInit();
            tick(1000);
            expect(fixture.errorResponse.status).toBe(500);
        }));
        it('should throw error Address information ',fakeAsync(()=>{
            const user = {
                "email": "vamsi8979@gmail.com",
                "name": "vamsi krishna",
                "nickname": "vamsi8979",
            }
            spyOn(loginServiceMock,'getUserInfo').and.returnValue(of(user));
            spyOn(profileServiceMock,'getProfile').and.returnValue(of(user));
            spyOn(profileServiceMock,'getAddress').and.returnValue(throwError({status:500}));
            spyOn(profileServiceMock,"getCardDetails").and.returnValue(of(null));
            fixture.ngOnInit();
            tick(1000);
            expect(fixture.errorResponse.status).toBe(500);
        }));
        it('should throw error Card Details information ',fakeAsync(()=>{
            const user = {
                "email": "vamsi8979@gmail.com",
                "name": "vamsi krishna",
                "nickname": "vamsi8979",
            }
            const address = {
                    addressLine1:"100010 South Connexions Loyalty Boulevard",
                    addressLine2:"Suite Northern Ireland MS 100011",
                    city:"Austin",
                    state:"Texas",
                    country:"United State",
                    zip:"73301"
            }
            const card={
                email:"vamsi8979@gmail.com",
                CardNumber:"23133123",
                CardHolderName:"23123213321321",
                ExpirationMonth:"12",
                ExpirationYear:"2020"
            }
            spyOn(loginServiceMock,'getUserInfo').and.returnValue(of(user));
            spyOn(profileServiceMock,'getProfile').and.returnValue(of(user));
            spyOn(profileServiceMock,'getAddress').and.returnValue(of(null));
            spyOn(profileServiceMock,"getCardDetails").and.returnValue(throwError({status:500}));
            fixture.ngOnInit();
            tick(1000);
            expect(fixture.errorResponse.status).toBe(500);
        }));
    
    });
});