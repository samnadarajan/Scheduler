import {NgModule} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";
import {MySchedulerComponent} from "./component/my-scheduler.component";
import {AdminComponent} from "./component/admin.component";
import {LoginComponent} from "./component/login.component";
import {UserListComponent} from "./component/user/user-list.component";

const routes: Routes = [
  {path:"", redirectTo: "/myscheduler", pathMatch:"full"},
  {path:"myscheduler", component: MySchedulerComponent},
  {path:"admin", component: AdminComponent},
  {path:"users", component: UserListComponent},
  {path:"login", component: LoginComponent}
]

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
