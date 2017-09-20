/**
 * Created by zhangxu on 2017/7/13.
 */

import {Component, OnInit} from "@angular/core";
import {User} from "../../model/User";
import {UserService} from "../../services/user.service";
import {Router} from "@angular/router";
@Component({
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit{

    constructor(private userService:UserService, private router:Router) {}

    user:User;
    ngOnInit(): void {
        this.user = this.userService.user;
    }

    managerLicense() : void {
        this.router.navigate(['manager-license']);
    }




}