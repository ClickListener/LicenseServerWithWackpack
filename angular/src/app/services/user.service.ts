/**
 * Created by zhangxu on 2017/7/17.
 */


import {Injectable} from "@angular/core";
import {Http, Headers} from "@angular/http";
import {User} from "../model/User";
import {Observable} from "rxjs";


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
        const url = '/user/signin';
        console.log(JSON.stringify(userInfo));

        return this.http.post(url, JSON.stringify(userInfo), this.header)
            .toPromise()
            .then(res => {
                console.log("res.json = " + JSON.stringify(res.json()));
                this.user = res.json() as User;

                console.log("email = " + JSON.stringify(this.user.email));
                console.log("roles = " + JSON.stringify(this.user.roles));
                console.log("licenseType = " + JSON.stringify(this.user.licenseType));
                return res.json() as User;
            })
            .catch(UserService.handleError)

    }

    /**
     * 注册服务
     * @param userInfo
     *
     */
    signUp(userInfo : any) : Promise<User> {
        const url = '/user/signup';

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
     * 登出服务
     * @returns {Promise<TResult|T>}
     */
    signOut() : Promise<void> {

        console.log("signOut()");
        const url = '/user/signout';

        return this.http.get(url).toPromise()
            .then((msg) => {

                console.log('msg = ' + msg);
                this.user = undefined;
                console.info('user = ' + this.user);

            })
            .catch(UserService.handleError);

    }

    private static handleError(error:any) : Promise<any> {
        console.log('An error occurred', JSON.stringify(error));//for demo purposes only
        return Promise.reject(error.message || error);
    }
}