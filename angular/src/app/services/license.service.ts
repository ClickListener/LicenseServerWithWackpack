

import {Injectable} from "@angular/core";
import {Http,Headers} from "@angular/http";
import {License} from "../model/License";

import {Observable} from "rxjs";

@Injectable()
export class LicenseService {


    constructor(private http: Http) {}

    private header = {
        headers: new Headers({'Content-Type': 'application/json'})
    };



    createNewLicense(licenseInfo:any) : Promise<void> {

        console.info("licenseInfo = " + JSON.stringify(licenseInfo));


        const url = '/api/auth/createNewLicense';
        return this.http.post(url, JSON.stringify(licenseInfo), this.header)
            .toPromise()
            .then( res => {
                console.info('res = ' + JSON.stringify(res));
            })
            .catch(LicenseService.handleError)

    }


    private static handleError(error:any) : Promise<any> {
        console.log('An error occurred', JSON.stringify(error));//for demo purposes only
        return Promise.reject(error.message || error);
    }

}