import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PagesComponent } from './pages.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { UsersComponent } from './users/users.component';
import { StatementsComponent } from './statements/statements.component';
import { EventsComponent } from './events/events.component';

const routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      { path: '', component: HomeComponent }, 
      { path: 'home', component: HomeComponent },
      { path: 'events', component: EventsComponent },
      { path: 'statements', component: StatementsComponent },
      { path: 'users', component: UsersComponent },
      { path: 'about', component: AboutComponent } 
    ]
  } , 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
