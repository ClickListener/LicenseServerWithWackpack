/**
 * Created by zhangxu on 2017/7/13.
 */
import {Component} from "@angular/core";
import {UserService} from "../../../services/user.service";
@Component({
    selector: 'sign-in',
    templateUrl : './sign-in.component.html',
    styleUrls : ['sign-in.component.css']
})

export class SignInComponent {

    constructor(private userService: UserService) {}


    signIn(email:string, password:string) : void {
        console.log('email = ' + email + " password = " + password);
        this.userService.signIn({"email": email, "password": password});
    }
}