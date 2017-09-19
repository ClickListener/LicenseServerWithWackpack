/**
 * Created by zhangxu on 2017/7/13.
 */

import {Component, OnInit} from "@angular/core";
import {User} from "../../model/User";
import {UserService} from "../../services/user.service";
@Component({
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit{

    constructor(private userService:UserService) {}

    user:User;
    ngOnInit(): void {
        this.user = this.userService.user;
    }




}