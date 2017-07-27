/**
 * Created by zhangxu on 2017/7/17.
 */


import {Injectable} from "@angular/core";
import {Http, Jsonp} from "@angular/http";

import 'rxjs/add/operator/toPromise';
@Injectable()
export class UserService {

    constructor(private http : Http, private jsonp : Jsonp) {

    }

    signIn(userInfo : any) : Promise<any> {
        return this.http.post('/api/auth/signIn', userInfo)
            .toPromise()
            .then(res => res.json())
            .catch(res => res.json())
    }
}