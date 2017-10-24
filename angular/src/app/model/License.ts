

export class License {

    totalUserNumber:number;
    devices: {
        expiredDate:string,
        deviceModule:{
            series:string,
            deviceName:string,
            displayName:string
        },
        deviceNumber:number
    }[]
}