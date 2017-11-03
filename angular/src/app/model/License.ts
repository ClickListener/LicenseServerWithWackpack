

import {Device} from "./Device";

export class License {

    _id:string;
    installedPhoneNumber:number;
    totalUserNumber:number;
    BundleIdOrPackageName:string;
    devices: Device[];
}