import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EventsComponent } from './events/events.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { TestComponent } from './test/test.component';
import { NewtestComponent } from './newtest/newtest.component';
import { UsersComponent } from './users/users.component';
import { SpecialEventsComponent } from './special-events/special-events.component';
import { AuthGuard } from './auth.guard';
import { ChartComponent } from './chart/chart.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'/special',
    pathMatch:'full'
  },
  {
    path:'register',
    component: RegisterComponent
  },
  {
    path:'test',
    component: TestComponent
  },
  {
    path:'chart',
    component: ChartComponent
  },
  {
    path:'newtest',
    component: NewtestComponent
  },
  {
    path:'users',
    component: UsersComponent
  },
  {
    path:'events',
    component: EventsComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'special',
    component: SpecialEventsComponent
  },
  {
    path:'login',
    component: LoginComponent 
  }
];
   
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
