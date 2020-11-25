import { fakeAsync } from '@angular/core/testing';
import { of } from 'rxjs';
import { LoginService } from './app.login.service';

describe("login service",()=>{
    let service:LoginService;
    const http = jest.fn();

    beforeEach(()=>{
        service = new LoginService(http as any);
    });

    describe('Login Service',()=>{
        it('should call getUserInfoAPI and get user info',fakeAsync(()=>{
            const response = {
                "email": "vamsi8979@gmail.com",
                "email_verified": true,
                "family_name": "krishna",
                "given_name": "vamsi",
                "locale": "en",
                "name": "vamsi krishna",
                "nickname": "vamsi8979",
            }
            const httpMock = {
                get:jest.fn().mockReturnValue(of(response))
            }
            const serviceMock = new LoginService(httpMock as any);
            serviceMock.getUserInfoAPI("cjks").subscribe(
                (data)=>{
                    expect(httpMock.get).toBeDefined();
                    expect(httpMock.get).toHaveBeenCalled();
                    expect(data.nickname).toBe("vamsi8979");
                }
            );
            serviceMock.getUserInfo().subscribe(
                (data)=>{
                    expect(data.nickname).toBe("vamsi8979");
                }
            );
        }));
        it('should set local storage',()=>{
            const httpMock = { }
            const serviceMock = new LoginService(httpMock as any);
            serviceMock.setStorage("testtoken");
            expect(serviceMock.loggedIn()).toBe(true);
        });
    });
});