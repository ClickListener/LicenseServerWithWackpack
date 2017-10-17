/**
 * Created by zhangxu on 2017/9/19.
 */
import {Component, OnInit} from "@angular/core";
import {UserService} from "../../../services/user.service";
import {Router} from "@angular/router";
import {User} from "../../../model/User";
@Component({
    selector: 'manager-license',
    templateUrl: './manager.component.html',
    styleUrls: ['manager.component.css']
})

export class ManagerComponent implements OnInit{


    constructor(private userService:UserService, private router:Router) {}

    user:User;
    ngOnInit(): void {
        this.user = this.userService.user;
    }


    signOut():void {
        console.log('signOut');
        this.userService.signOut();
    }


}