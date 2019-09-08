import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { GuestGuardService as GuestGuard } from "./services/guest-guard.service";
import { AuthGuardService as AuthGuard } from "./services/auth-guard.service";

import { SignInComponent } from "./components/sign-in/sign-in.component";

import { CustomerLayoutComponent } from "./customer/components/customer-layout/customer-layout.component";
import { CustomerHomeComponent } from "./customer/components/customer-home/customer-home.component";
import { CustomerHistoryComponent } from "./customer/components/customer-history/customer-history.component";

import { ProviderHomeComponent } from "./provider/components/provider-home/provider-home.component";

const routes: Routes = [
  { path: "", redirectTo: "signin", pathMatch: "full" },
  { path: "signin", component: SignInComponent, canActivate: [GuestGuard] },
  {
    path: "customer",
    component: CustomerLayoutComponent,
    // canActivate: [AuthGuard]
    children: [
      { path: "", redirectTo: "home", pathMatch: "full" },
      { path: "home", component: CustomerHomeComponent },
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
