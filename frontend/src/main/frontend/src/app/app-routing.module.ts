import {NgModule} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";
import {MySchedulerComponent} from "./component/my-scheduler.component";
import {AdminComponent} from "./component/admin.component";

const routes: Routes = [
  {path:"", redirectTo: "/myscheduler", pathMatch:"full"},
  {path:"myscheduler", component: MySchedulerComponent},
  {path:"admin", component: AdminComponent}
]

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
