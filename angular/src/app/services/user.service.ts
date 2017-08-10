/**
 * Created by zhangxu on 2017/7/17.
 */


import {Injectable} from "@angular/core";
import {Http, Headers} from "@angular/http";
import {User} from "../model/User";


@Injectable()
export class UserService {

    constructor(private http : Http) {

    }

    private header = {
        headers: new Headers({'Content-Type': 'application/json'})
    };


    /**
     * 登录服务
     * @param userInfo
     */
    signIn(userInfo : any) : Promise<User> {
        const url = '/api/auth/signin';
        console.log(JSON.stringify(userInfo));

        return this.http.post(url, JSON.stringify(userInfo), this.header)
            .toPromise()
            .then(res => {
                console.log("res.json = " + JSON.stringify(res.json()));
               return res.json() as User;
            })
            .catch(UserService.handleError)

    }

    /**
     * 注册服务
     * @param userInfo
     *
     */
    signUp(userInfo : any) : Promise<void> {
        const url = '/api/auth/signup';

        console.log(JSON.stringify(userInfo));

        return this.http.post(url, JSON.stringify(userInfo), this.header)
            .toPromise()
            .then(res => {
                console.log("res.json() = " + res.json());
            })
            .catch(UserService.handleError)

    }

    private static handleError(error:any) : Promise<any> {
        console.log('An error occurred', JSON.stringify(error));//for demo purposes only
        return Promise.reject(error.message || error);
    }
}