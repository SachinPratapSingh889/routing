import { Host, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatagoriesComponent } from './catagories/catagories.component';

import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { UsersComponent } from './users/users.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AuthGuardService } from './service/guards/auth-guard.service';
const routes: Routes = [
  
  {path:'', component:HomeComponent},
  {
    path:'users',
     component:UsersComponent,
    //  canActivate:[AuthGuardService],
    canActivateChild:[AuthGuardService],
    children:[{path:':id/:name1', component:UserComponent },
    {path:':id/:name1/edit', component:EditUserComponent },],
    
  },
  // {path:'users/:id/:name1', component:UserComponent ,},
  {path:'catagories', component:CatagoriesComponent},
 
  {path:'not-found', component:PageNotFoundComponent},
  {path:'**', redirectTo:'not-found'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
