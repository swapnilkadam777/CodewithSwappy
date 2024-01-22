import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './components/home/home.component';
import { AuthGuard } from './auth.guard';
import { AboutComponent } from './components/about/about.component';
import { TestComponent } from './test/test.component';
export const routes: Routes = [
    { path: '', component: LoginComponent} ,
    { path: 'home',  
        children:[
            { path: '', component: HomeComponent }, 
            { path: 'about', component: AboutComponent } 
        ],canActivate: [AuthGuard] } ,
    { path: 'login', component: LoginComponent },
    { path: '*', component: LoginComponent },
    { path: '**', component: LoginComponent }
];
