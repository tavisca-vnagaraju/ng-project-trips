import { of } from 'rxjs';
import { CardDetails } from '../models/card-details';
import { Profile } from '../models/profile';
import {CardDetailsFormComponent} from './card-details-form.component';

describe("CardDetailsFormComponent",()=>{
    let fixture:CardDetailsFormComponent;
    let profileServiceMock:any;
    let routerMock:any;

    beforeEach(()=>{
        profileServiceMock = {
            postCardDetails:jest.fn()
        }
        routerMock = {
            navigate:jest.fn()
        }
        fixture = new CardDetailsFormComponent(profileServiceMock,routerMock);
    });
    describe("test",()=>{
        it("should have cardDetails null and empty",()=>{
            expect(fixture.cardDetails.email).toBe("");
            expect(fixture.cardDetails.ExpirationMonth).toBe("January");
            expect(fixture.cardDetails.ExpirationYear).toBe(2020);
            expect(fixture.years.length).toBe(11);
        });
        it("should select month",()=>{
            let eventMock = {
                target:{
                    value:"February"
                }
            };
            fixture.selectedMonth(eventMock);
            expect(fixture.cardDetails.ExpirationMonth).toBe("February");
        });
        it("should select year",()=>{
            let eventMock = {
                target:{
                    value:2023
                }
            };
            fixture.selectedYear(eventMock);
            expect(fixture.cardDetails.ExpirationYear).toBe(2023);
        });
        it('should navigate to /user/profile',()=>{
            fixture.profile = new Profile("","","",null,"","");
            spyOn(profileServiceMock,'postCardDetails').and.returnValue(of({email:"test@gmail.com"}));
            fixture.submitCard();
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