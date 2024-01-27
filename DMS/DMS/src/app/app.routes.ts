import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component'; 
import { AuthGuard } from './auth.guard'; 
export const routes: Routes = [
    { path: '', component: LoginComponent} , 
    { path: 'pages', loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule)},
    { path: 'login', component: LoginComponent },
    { path: '*', component: LoginComponent },
    { path: '**', component: LoginComponent }
];
