/**
 * Created by zhangxu on 2017/9/19.
 */
import {Component, DoCheck, OnInit} from "@angular/core";
import {UserService} from "../../../services/user.service";
import {Router} from "@angular/router";
import {User} from "../../../model/User";
import {LicenseService} from "../../../services/license.service";
@Component({
    selector: 'create-newLicense',
    templateUrl: './createNew.component.html',
    styleUrls: ['createNew.component.css']
})

export class CreateNewComponent implements OnInit, DoCheck{

    ngDoCheck(): void {
    }
    ngOnInit(): void {
    }




    constructor(private userService : UserService, private router: Router, private licenseService : LicenseService){
        console.log('createNew----------constructor()');
    }

    createNewLicense(installedPhoneNumber:number, totalUserNumber:number, BundleIdOrPackageName:string) : void {
        console.info('createNewLicense()');
        console.info('userId = ' + this.userService.user._id);
        console.info('installedPhoneNumber = ' + installedPhoneNumber );
        console.info('totalUserNumber = ' + totalUserNumber );
        console.info('BundleIdOrPackageName = ' + BundleIdOrPackageName );

        this.licenseService.createNewLicense({
            "userId":this.userService.user._id,
            "installedPhoneNumber": installedPhoneNumber,
            "totalUserNumber": totalUserNumber,
            "BundleIdOrPackageName": BundleIdOrPackageName

        })
            .then( res => {
                console.info('res = ' + JSON.stringify(res));
                //保存成功，跳转到管理界面
                this.router.navigate(['/manager-license']);

        })
            .catch(err => {
                console.info('error = ' + err);
            })


    }




}