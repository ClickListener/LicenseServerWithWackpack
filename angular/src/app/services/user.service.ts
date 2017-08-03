/**
 * Created by zhangxu on 2017/7/17.
 */


import {Injectable} from "@angular/core";
import {Http, Jsonp, Headers} from "@angular/http";

import 'rxjs/add/operator/toPromise';

@Injectable()
export class UserService {

    constructor(private http : Http, private jsonp : Jsonp) {

    }

    signIn(userInfo : any) : void {
        const url = '/signIn';
        console.log(JSON.stringify(userInfo));
        this.http.post(url, JSON.stringify(userInfo), {headers: new Headers({'Content-Type': 'application/json'})}).subscribe(function (res) {
                console.log(JSON.stringify(res) + "status = " + res.status);
            });
    }
}