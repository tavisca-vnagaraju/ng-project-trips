import { of } from 'rxjs';
import {ProfileFormComponent} from './profile-form.component';

describe('ProfileFormComponent',()=>{
    let fixture:ProfileFormComponent;
    let profileServiceMock:any;
    let routerMock:any;

    profileServiceMock = {
        postProfile:jest.fn()
    }
    routerMock = {
        navigate:jest.fn()
    }
    fixture = new ProfileFormComponent(profileServiceMock,routerMock);
    describe('Test',()=>{
        it('should have null and empty profile values',()=>{
            expect(fixture.profile.email).toBe("");
            expect(fixture.profile.DOB).toBe(null);
        });
        it('should have form product defined',()=>{
            expect(fixture.frmProduct).toBeDefined();
        });
        it('should have phone and DOB should be invalid',()=>{
            expect(fixture.frmProduct.controls.phone.valid).toBeFalsy();
            expect(fixture.frmProduct.controls.DOB.valid).toBeFalsy();
        });
        it('should validate phone as valid',()=>{
            fixture.frmProduct.controls.phone.setValue("1234567890");
            expect(fixture.frmProduct.controls.phone.valid).toBeTruthy();
            expect(fixture.frmProduct.controls.phone.errors).toBeNull();
        });
        it('should give pattern error',()=>{
            fixture.frmProduct.controls.phone.setValue("dcksdcjshd");
            expect(fixture.frmProduct.controls.phone.errors.pattern).toBeDefined();
        })
        it('should navigate to /user/profile',()=>{
            spyOn(profileServiceMock,'postProfile').and.returnValue(of({email:"test@gmail.com"}));
            fixture.save();
            expect(routerMock.navigate).toHaveBeenCalledWith(["/user/profile"]);
        });
        it('should be something',()=>{
            fixture.frmProduct.controls.DOB.setValue(new Date());
            expect(fixture.frmProduct.controls.DOB.errors.valid).toBeFalsy();
        });
    });
});