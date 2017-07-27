/**
 * Created by zhangxu on 2017/6/30.
 */
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {AppComponent} from "./components/app/app.component";
import {AppRoutingModule} from "./app-routing.module";
import {SignInComponent} from "./components/user/user_signIn/sign-in.component";
import {SignUpComponent} from "./components/user/user_signUp/sign-up.component";
import {HomeComponent} from "./components/home/home.component";
import {UserService} from "./services/user.service";
import {HttpModule, JsonpModule} from "@angular/http";

@NgModule({

    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpModule,
        JsonpModule

    ],
    declarations:[
        AppComponent,
        SignInComponent,
        SignUpComponent,
        HomeComponent
    ],

    bootstrap:[AppComponent],

    providers:[UserService]
})

export class AppModule {}