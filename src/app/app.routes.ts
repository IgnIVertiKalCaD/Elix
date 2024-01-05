import {Routes} from "@angular/router";
import {AuthComponent} from "./auth/auth.component";
import {RecoveryComponent} from "./auth/recovery/recovery.component";
import {LoginComponent} from "./auth/login/login.component";
import {RegistrationComponent} from "./auth/registration/registration.component";
import {NavigationComponent} from "./user/navigation.component";
import {RecoveryEnterCodeComponent} from "./auth/recovery/enter-code/recovery-enter-code.component";
import {EnterEmailComponent} from "./auth/recovery/enter-email/enter-email.component";
import {ChangePasswordComponent} from "./auth/recovery/change-password/change-password.component";
import {MaintenanceComponent} from "./features/errors/servers/maintenance/maintenance.component";
import {Error502Component} from "./features/errors/servers/error502/error502.component";
import {ProfileComponent} from "./user/profile/profile.component";
import {RegisterComponent} from "./auth/registration/register/register.component";
import {RegEnterCodeComponent} from "./auth/registration/enter-code/reg-enter-code.component";

export const routes: Routes = [
    {
        path: '',
        component: AuthComponent,
        children: [
            {
                path: 'login',
                component: LoginComponent,
            },
            {
                path: 'registration',
                component: RegistrationComponent,
                children: [
                    {
                        path: '',
                        component: RegisterComponent,
                    },{
                        path: 'code',
                        component: RegEnterCodeComponent,
                    },
                ]
            },
            {
                path: 'recovery',
                component: RecoveryComponent,
                children: [
                    {
                        path: '',
                        component: EnterEmailComponent,
                    },{
                        path: 'code',
                        component: RecoveryEnterCodeComponent,
                    },{
                        path: 'change',
                        component: ChangePasswordComponent,
                    },
                ]
            }, {
                path: 'rab',
                component: MaintenanceComponent,
            }, {
                path: 'error',
                component: Error502Component,
            },
        ]
    },
    {
        path: '',
        component: NavigationComponent,
        children: [
            {
                path: 'profile',
                component: ProfileComponent,
            }
        ]
    },

];
