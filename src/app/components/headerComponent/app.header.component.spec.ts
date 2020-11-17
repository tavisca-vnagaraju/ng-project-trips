import { fakeAsync, tick } from "@angular/core/testing";
import { of, throwError } from 'rxjs';

import { AppHeaderComponent } from './app.header.component';

import * as LoginActions from '../../ngrx/state/login/login.action';

describe('AppHeaderComponent',()=>{
    let fixture:AppHeaderComponent;
    let loginServiceMock:any;
    let storeMock:any;
    let routerMock:any;
    beforeEach(()=>{
        loginServiceMock = {
            loggedIn:jest.fn(),
            getUserInfoAPI:jest.fn()
        },
        routerMock = {
			navigate: jest.fn()
        };
        storeMock = {
            select:jest.fn()
        };
        fixture = new AppHeaderComponent(loginServiceMock,storeMock,routerMock);
        window.localStorage.clear();
    });
    describe("ngOnInit Test",()=>{
        it('should call user info API if access token is not empty',fakeAsync(()=>{
            const access_token = "cnsdkjcnd";
            const user = {
                "email": "vamsi8979@gmail.com",
                "name": "vamsi krishna",
                "nickname": "vamsi8979",
            }
            spyOn(storeMock,'select').and.returnValue(of(access_token));
            spyOn(loginServiceMock,'getUserInfoAPI').and.returnValue(of(user));
            fixture.ngOnInit();
            tick(1000);
            expect(fixture.userInfo.email).toEqual("vamsi8979@gmail.com");
        }));
        it('should call user info API if access token is empty',fakeAsync(()=>{
            const access_token = "";
            const user = {
                "email": "vamsi8979@gmail.com",
                "name": "vamsi krishna",
                "nickname": "vamsi8979",
            }
            spyOn(storeMock,'select').and.returnValue(of(access_token));
            spyOn(loginServiceMock,'getUserInfoAPI').and.returnValue(of(user));
            spyOn(loginServiceMock,'loggedIn').and.returnValue(true);
            fixture.ngOnInit();
            tick(1000);
            expect(fixture.userInfo.email).toEqual(user.email);
        }));
        it('should call user info API if access token is empty and not logged in',fakeAsync(()=>{
            const access_token = "";
            const user = {
                "email": "vamsi8979@gmail.com",
                "name": "vamsi krishna",
                "nickname": "vamsi8979",
            }
            spyOn(storeMock,'select').and.returnValue(of(access_token));
            spyOn(loginServiceMock,'getUserInfoAPI').and.returnValue(of(null));
            spyOn(loginServiceMock,'loggedIn').and.returnValue(false);
            fixture.ngOnInit();
            tick(1000);
            expect(fixture.userInfo).toEqual(undefined);
        }));
        
        it('should navigate to login when error',fakeAsync(()=>{
            spyOn(loginServiceMock,'getUserInfoAPI').and.returnValue(throwError({status:400}));
            fixture.callUserInfoAPI("chsdjkcnsdj");
            tick(1000);
            expect(routerMock.navigate).toHaveBeenCalledWith(['/login']);
        }));
        it('should navigate to /trips/details page',()=>{
            fixture.toUserProfileInfo();
            expect(routerMock.navigate).toHaveBeenCalledWith(['/user/profile']);
        });
        it('should redirect to trips list page if logged in',()=>{
            spyOn(loginServiceMock,'loggedIn').and.returnValue(true);
            fixture.redirectToHome();
            expect(routerMock.navigate).toHaveBeenCalledWith(['/tripsList']);
        });
        it('should redirect to login if not logged in',()=>{
            spyOn(loginServiceMock,'loggedIn').and.returnValue(false);
            fixture.redirectToHome();
            expect(routerMock.navigate).toHaveBeenCalledWith(['/login']);
        });
        it('should clear local storage',()=>{
            window.localStorage.setItem("tok","dvhskjvsvds");
            global.window = Object.create(window);
            const url = "https://vamsi8979.us.auth0.com/v2/logout?";
            Object.defineProperty(window, 'location', {
                value: {
                    href: url
                }
            });
            fixture.logout();
            expect(window.location.href).toMatch("https://vamsi8979.us.auth0.com/v2/logout?");
            expect(window.localStorage.getItem("tok")).toEqual(null);
        });
    });
});

describe('Store test', () => {
    it('should set selected id', () => {
      const logintest = <any>{ token: "cjksd"},
        action = LoginActions.setAccessToken(logintest);
      expect(action.type).toBe('[Login] Set Access Token');
    });
});