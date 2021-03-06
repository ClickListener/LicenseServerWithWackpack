/**
 * Created by zhangxu on 2017/7/13.
 */

import {Component, DoCheck, OnInit} from "@angular/core";
import {User} from "../../model/User";
import {UserService} from "../../services/user.service";
import {Router} from "@angular/router";
@Component({
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit, DoCheck{


    user:User;


    ngDoCheck(): void {
        this.user = this.userService.user;
    }

    constructor(private userService:UserService, private router:Router) {}


    ngOnInit(): void {
        this.user = this.userService.user;
    }

    managerLicense() : void {
        this.router.navigate(['manager-license']);
    }




}