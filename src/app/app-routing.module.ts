import { Host, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatagoriesComponent } from './catagories/catagories.component';
import { HistoryComponent } from './history/history.component';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'users', component:UsersComponent},
  {path:'users/:id/:name1', component:UsersComponent},
  {path:'catagories', component:CatagoriesComponent},
  {path:'history',component:HistoryComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
