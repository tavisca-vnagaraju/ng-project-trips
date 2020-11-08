import {LoginComponent} from './app.login.component';

describe('LoginComponent',()=>{
    let fixture:LoginComponent;
    let matIconRegistryMock:any;
    let domSanitizerMock:any;
    let routerMock:any;
    let loginServiceMock:any;
    matIconRegistryMock = {
        addSvgIcon:jest.fn()
    };
    domSanitizerMock = {
        bypassSecurityTrustResourceUrl:jest.fn()
    };
    routerMock = {
        navigate:jest.fn()
    };
    loginServiceMock = {
        loggedIn:jest.fn()
    };
    fixture = new LoginComponent(matIconRegistryMock,domSanitizerMock,routerMock,loginServiceMock);
    describe("ngOnInit Test",()=>{
        it('should redirect to trips list if logged in',()=>{
            spyOn(loginServiceMock,'loggedIn').and.returnValue(true);
            fixture.ngOnInit();
            expect(routerMock.navigate).toHaveBeenCalledWith(['/tripsList']);
        });
        it('should redirect to login if not logged in',()=>{
            spyOn(loginServiceMock,'loggedIn').and.returnValue(false);
            fixture.ngOnInit();
            expect(routerMock.navigate).toHaveBeenCalledWith(['/login']);
        });
        it('should call loginWithGoogle',()=>{
            global.window = Object.create(window);
            const url = "https://vamsi8979.us.auth0.com/authorize?";
            Object.defineProperty(window, 'location', {
                value: {
                    href: url
                }
            });
            fixture.loginWithGoogle();
            expect(window.location.href).toMatch("https://vamsi8979.us.auth0.com/authorize?");
        });
    });
});