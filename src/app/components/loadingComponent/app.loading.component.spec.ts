import {Loading} from './app.loading.component';

describe('Loading Component',()=>{
    let fixture:Loading;
    let activatedRouteMock:any;
    let routerMock:any;
    let storeMock:any;
    beforeEach(()=>{
        activatedRouteMock = {
            snapshot:{
                fragment:"access_token=wfBNPQRQOI_6rJGICjahgfb5HbeNkDsD&scope=openid profile email&expires_in=7200&token_type=Bearer"
            }
        };
        routerMock = {
            navigate:jest.fn()
        };
        storeMock = {
            dispatch:jest.fn()
        }
        fixture = new Loading(activatedRouteMock,routerMock,storeMock);
    });
    it('should call query params',()=>{
        fixture.ngOnInit();
        let tok = window.localStorage.getItem('tok');
        expect(fixture.queryParams.scope).toEqual("openid profile email");
    });
    it('should not have local storage null',()=>{
        fixture.ngOnInit();
        let tok = window.localStorage.getItem('tok');
        expect(tok).not.toEqual(null);
    });
    it('should navigate to trips',()=>{
        fixture.ngOnInit();
        expect(routerMock.navigate).toHaveBeenCalledWith(['/tripsList']);
    });
});