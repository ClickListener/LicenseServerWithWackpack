/**
 * Created by zhangxu on 2017/9/19.
 */
import {Component, DoCheck, OnInit} from "@angular/core";
import {UserService} from "../../../services/user.service";
import {Router} from "@angular/router";
import {User} from "../../../model/User";
import {LicenseService} from "../../../services/license.service";
import {License} from "../../../model/License";

@Component({
    selector: 'manager-license',
    templateUrl: './manager.component.html',
    styleUrls: ['manager.component.css']
})

export class ManagerComponent implements OnInit, DoCheck {


    user: User;
    licenses: License[];

    constructor(private userService: UserService, private router: Router, private licenseService: LicenseService) {
    }


    ngOnInit(): void {
        this.user = this.userService.user;
    }

    ngDoCheck(): void {

        this.licenses = this.licenseService.licenses;
        console.log('this.license !== []' + (this.licenses.length === 0));
        console.info("this.licenses = " + JSON.stringify(this.licenses));

    }

    createNewLicense(): void {
        this.router.navigate(['./create-newLicense'])
    }

}