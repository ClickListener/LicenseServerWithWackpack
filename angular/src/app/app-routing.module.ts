/**
 * Created by zhangxu on 2017/7/13.
 */
import {Routes, RouterModule} from "@angular/router";
import {NgModule} from "@angular/core";
import {SignInComponent} from "./components/user/user_signIn/sign-in.component";
import {SignUpComponent} from "./components/user/user_signUp/sign-up.component";
import {HomeComponent} from "./components/home/home.component";
/**
 * 路由模块
 */


const routes : Routes = [
    {
        path: '',
        component: HomeComponent
    },

    {
        path: 'sign-in',
        component: SignInComponent
    },
    {
        path: 'sign-up',
        component: SignUpComponent
    }
];

@NgModule({
    imports : [RouterModule.forRoot(routes)],
    exports : [RouterModule]
})

export class AppRoutingModule {}