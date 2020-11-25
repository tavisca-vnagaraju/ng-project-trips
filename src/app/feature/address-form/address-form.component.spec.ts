import { of } from 'rxjs';
import { Profile } from '../models/profile';
import {AddressFormComponent} from './address-form.component';

describe('AddressFormComponent',()=>{
    let fixture:AddressFormComponent;
    let profileServiceMock:any;
    let routerMock:any;

    beforeEach(()=>{
        profileServiceMock = {
            postAddress:jest.fn()
        }
        routerMock = {
            navigate:jest.fn()
        }
        fixture = new AddressFormComponent(profileServiceMock,routerMock);
    });
    describe("test",()=>{
        it('should have null and empty address values',()=>{
            expect(fixture.address.email).toBe("");
            expect(fixture.address.state).toBe("");
            expect(fixture.address.city).toBe("");
        });
        it('should navigate to /user/profile',()=>{
            fixture.profile = new Profile("","","",null,"","");
            spyOn(profileServiceMock,'postAddress').and.returnValue(of({email:"test@gmail.com"}));
            fixture.submitAddress();
            expect(routerMock.navigate).toHaveBeenCalledWith(["/user/profile"]);
        });
        
    });
    
    describe("validate number method",()=>{
            
        it('should validate number event key code 15',()=>{
            let event = {
                keyCode:15,
                preventDefault:jest.fn()
            };

            spyOn(event,'preventDefault');
            fixture.validateNumber(event);
            expect(event.preventDefault).toHaveBeenCalled();
        });
        it('should validate number event key code 56',()=>{
            let event = {
                keyCode:56,
                preventDefault:jest.fn()
            };

            spyOn(event,'preventDefault');
            fixture.validateNumber(event);
            expect(event.preventDefault).not.toHaveBeenCalled();
        });
        it('should validate number event key code 104',()=>{
        let event = {
            keyCode:104,
            preventDefault:jest.fn()
        };
        spyOn(event,'preventDefault');
        fixture.validateNumber(event);
        expect(event.preventDefault).not.toHaveBeenCalled();
    });

    });
    
});