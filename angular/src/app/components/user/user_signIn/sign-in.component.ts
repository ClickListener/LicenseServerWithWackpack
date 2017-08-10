/**
 * Created by zhangxu on 2017/7/13.
 */
import {Component} from "@angular/core";
import {UserService} from "../../../services/user.service";
import {Router} from "@angular/router";
import {User} from "../../../model/User";


@Component({
    selector: 'sign-in',
    templateUrl : './sign-in.component.html',
    styleUrls : ['sign-in.component.css']
})

export class SignInComponent {


    constructor(private userService: UserService, private router: Router) {}

    user:User;

    signIn(email:string, password:string) : void {
        console.log('email = ' + email + " password = " + password);
        this.userService.signIn({"email": email, "password": password})
            .then((res) => {
                this.user = res;
                // this.user.user = JSON.stringify(res);
                // this.user.email = res.email;
                // this.user.licenses = JSON.stringify(res.licenses);
                console.log("email = " + JSON.stringify(this.user.email));
                console.log("totalUserNumber = " + JSON.stringify(this.user.licenses[0].totalUserNumber));
                console.log("devices = " + JSON.stringify(this.user.licenses[0].devices));
                alert("登录成功");
                this.router.navigate(['/']);
            })
            .catch(error => {
                console.log("error = " + JSON.stringify(error));
            })
    }
}