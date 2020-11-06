import { fakeAsync, tick } from '@angular/core/testing';
import { of } from 'rxjs';
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
        it('should call get userinformation ',fakeAsync(()=>{
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
            expect(fixture.userInfo.email).toEqual(user.email);
        }));
    });
});