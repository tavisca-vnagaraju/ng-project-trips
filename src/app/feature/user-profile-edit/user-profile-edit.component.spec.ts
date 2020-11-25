import { fakeAsync, tick } from '@angular/core/testing';
import { of } from 'rxjs';

import { UserProfileEditComponent } from './user-profile-edit.component';

describe('UserProfileEditComponent', () => {
  let fixture:UserProfileEditComponent;
  let loginServiceMock:any;

  beforeEach(()=>{
    loginServiceMock = {
        getUserInfo:jest.fn(),
      };
      fixture  = new UserProfileEditComponent(loginServiceMock);
  });
  
it('should load profile email empty', () => {
     expect(fixture.profile.email).toEqual("");
  });
it('should call get userinformation',fakeAsync(()=>{
    const user = {
      "email": "test@gmail.com",
      "name": "Bruce",
      "nickname": "bat",
    }
    spyOn(loginServiceMock,'getUserInfo').and.returnValue(of(user));
    fixture.ngOnInit();
    tick(1000);
    expect(fixture.userInfo.email).toEqual("test@gmail.com");
    expect(fixture.userInfo.name).toEqual("Bruce");
    expect(fixture.userInfo.nickname).toEqual("bat");
  }));
});
