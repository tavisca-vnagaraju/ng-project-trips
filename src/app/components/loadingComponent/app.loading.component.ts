import { Component} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';

import * as LoginActions from '../../ngrx/state/login/login.action';
import { LoginService } from 'src/app/services/app.login.service';

@Component({
    selector: 'app-loading-component',
    templateUrl: './app.loading.component.html',
})

export class Loading{
    queryParams:any;
    constructor(private route: ActivatedRoute,
        private loginService:LoginService,
        private router:Router,
        private store: Store<any>
    ) {
        this.queryParams = this.getQueryParams();
        this.loginService.setStorage(this.queryParams.access_token);
        this.store.dispatch(LoginActions.setAccessToken({token:this.queryParams.access_token}));
        //this.queryParamString = this.route.snapshot.fragment;
    }

    ngOnInit(){
        this.router.navigate(['/tripsList']);
    }
    
    getQueryParams():any{
        let queryParams = {};
        let routeFragment = this.route.snapshot.fragment;
        let fragments = routeFragment.split("&");
        fragments.forEach(element => {
            queryParams[element.split("=")[0]] = element.split("=")[1];
        });
        return queryParams;
    }
}
