import { Routes } from "@angular/router";
import { CustomerHomeComponent } from "./components/customer-home/customer-home.component";
import { AuthGuardService as AuthGuard } from "../services/auth-guard.service";

export const routes: Routes = [
  {
    path: "customer/home",
    component: CustomerHomeComponent,
    canActivate: [AuthGuard],
    children: [
      // example for declare children component routes
      { path: "customer", redirectTo: "customer/home", pathMatch: "full" }
      //   { path: 'home', component: HomeComponent},
      //   { path: 'admin', component: AdminComponent}
    ]
  }
];
