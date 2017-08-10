/**
 * Created by zhangxu on 03/08/2017.
 */
export class User {

    email: string;
    licenses: {
        totalUserNumber:number,
        devices: {
            expiredDate:string,
            deviceModule:{
                series:string,
                deviceName:string,
                displayName:string
            },
            deviceNumber:number
        }[]
    }[];


}