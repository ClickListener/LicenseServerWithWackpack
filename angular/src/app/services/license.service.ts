

import {Injectable} from "@angular/core";
import {Http,Headers} from "@angular/http";
import {License} from "../model/License";

import {Observable} from "rxjs";
import {UserService} from "./user.service";

@Injectable()
export class LicenseService {


    constructor(private http: Http) {}

    private header = {
        headers: new Headers({'Content-Type': 'application/json'})
    };


    licenses:License[];

    createNewLicense(licenseInfo:any) : Promise<License[]> {

        console.info("licenseInfo = " + JSON.stringify(licenseInfo));


        // const url = '/api/auth/createNewLicense';
        const url = '/license/createNewLicense';
        return this.http.post(url, JSON.stringify(licenseInfo), this.header)
            .toPromise()
            .then( res => {
                this.licenses = res.json().licenses as License[];
                console.info('res = ' + JSON.stringify(this.licenses));
                return res.json();
            })
            .catch(LicenseService.handleError)

    }


    private static handleError(error:any) : Promise<any> {
        console.log('An error occurred', JSON.stringify(error));//for demo purposes only
        return Promise.reject(error.message || error);
    }

}