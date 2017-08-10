/**
 * Created by zhangxu on 2017/6/30.
 */

import {Component, OnInit, Input} from "@angular/core";
import {User} from "../../model/User";
@Component({
    selector: 'my-app',

    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']

})
export class AppComponent implements OnInit {

    @Input() user: User;

    ngOnInit(): void {
        if (!this.user) {
            console.log("user = " + this.user);
        } else {
            console.log("user = " + "呵呵呵");
        }
    }


}