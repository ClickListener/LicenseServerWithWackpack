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

    user: User;

    private header = {
        headers: new Headers({'Content-Type': 'application/json'})
    };


    /**
     * 登录服务3
     * @param userInfo
     */
    signIn(userInfo : any) : Promise<User> {
        const url = '/api/auth/signin';
        console.log(JSON.stringify(userInfo));

        return this.http.post(url, JSON.stringify(userInfo), this.header)
            .toPromise()
            .then(res => {
                console.log("res.json = " + JSON.stringify(res.json()));
                this.user = res.json() as User;
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

    /**
     * 登出服务
     * @returns {Promise<TResult|T>}
     */
    signOut() : void {

        console.log("signOut()");
        const url = '/api/auth/signout';

        this.http.get(url, this.header)
            .toPromise()
            .then(() => {
                console.log("res.json() = ");
            })
            .catch(UserService.handleError)
    }

    private static handleError(error:any) : Promise<any> {
        console.log('An error occurred', JSON.stringify(error));//for demo purposes only
        return Promise.reject(error.message || error);
    }
}