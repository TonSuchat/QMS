import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { GuestGuardService as GuestGuard } from "./services/guest-guard.service";
import { AuthGuardService as AuthGuard } from "./services/auth-guard.service";

import { SignInComponent } from "./components/sign-in/sign-in.component";
import { RegisterComponent } from "./components/register/register.component";

import { CustomerLayoutComponent } from "./customer/components/customer-layout/customer-layout.component";
import { CustomerHomeComponent } from "./customer/components/customer-home/customer-home.component";
import { CustomerProfileComponent } from "./customer/components/customer-profile/customer-profile.component";
import { CustomerHistoryComponent } from "./customer/components/customer-history/customer-history.component";
import { CustomerEditProfileComponent } from "./customer/components/customer-edit-profile/customer-edit-profile.component";

import { ProviderHomeComponent } from "./provider/components/provider-home/provider-home.component";

const routes: Routes = [
  { path: "", redirectTo: "signin", pathMatch: "full" },
  { path: "signin", component: SignInComponent, canActivate: [GuestGuard] },
  { path: "register", component: RegisterComponent },
  {
    path: "customer",
    component: CustomerLayoutComponent,
    canActivate: [AuthGuard],
    children: [
      { path: "", redirectTo: "home", pathMatch: "full" },
      { path: "home", component: CustomerHomeComponent },
      { path: "profile", component: CustomerProfileComponent },
      { path: "editProfile", component: CustomerEditProfileComponent },
      { path: "history", component: CustomerHistoryComponent }
    ]
  },
  {
    path: "provider",
    component: ProviderHomeComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
