/**
 * Created by zhangxu on 2017/9/19.
 */
import {Component} from "@angular/core";
import {ActivatedRoute, Router} from "@angular/router";
import {License} from "../../../model/License";
import {LicenseService} from "../../../services/license.service";
import {UserService} from "../../../services/user.service";
@Component({
    selector: 'modify-license',
    templateUrl: './modify.component.html',
    styleUrls: ['modify.component.css']
})

export class ModifyComponent {



    license:License;

    constructor(private licenseService:LicenseService, private userService:UserService) {
        this.license = licenseService.license;

        console.log('ModifyComponent---------license = ' + JSON.stringify(this.license));
    }


    updateLicense() {
        this.licenseService.updateLicense({
            'userId': this.userService.user._id,
            'licenseId': this.license._id,
            'installedPhoneNumber': this.license.installedPhoneNumber,
            'totalUserNumber': this.license.totalUserNumber,
            'BundleIdOrPackageName': this.license.BundleIdOrPackageName
        })
    }
}