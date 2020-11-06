import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Profile } from '../models/profile';

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
});
