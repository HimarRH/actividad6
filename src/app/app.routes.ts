import { Routes } from '@angular/router';
import { UserHomeComponent } from './views/users/user-home/user-home.component';

export const routes: Routes = [

    {path: '', redirectTo: '/users', pathMatch: 'full'},
    {path: 'users', component: UserHomeComponent},
    //{path: 'users/:id', component: UserDetailComponent},

];
