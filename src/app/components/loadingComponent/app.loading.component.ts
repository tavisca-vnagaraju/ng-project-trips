import { Component} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {APIService} from '../../services/app.APIService.service';
import {UserInfo} from '../../models/app.userInfo.model';
@Component({
    selector: 'app-loading-component',
    templateUrl: './app.loading.component.html',
})

export class Loading{
    queryParams:any;
    constructor(private route: ActivatedRoute,private apiService:APIService,private router:Router) {
        this.queryParams = this.getQueryParams();
        this.apiService.setStorage(this.queryParams.access_token);
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
