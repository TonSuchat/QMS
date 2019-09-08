import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { SignInComponent } from "./components/sign-in/sign-in.component";
import { CustomerHomeComponent } from "./components/customer/customer-home/customer-home.component";
import { ProviderHomeComponent } from "./components/provider/provider-home/provider-home.component";

import { GuestGuardService as GuestGuard } from "./services/guest-guard.service";
import { AuthGuardService as AuthGuard } from "./services/auth-guard.service";

const routes: Routes = [
  { path: "", redirectTo: "signin", pathMatch: "full" },
  { path: "signin", component: SignInComponent, canActivate: [GuestGuard] },
  {
    path: "customer-home",
    component: CustomerHomeComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "provider-home",
    component: ProviderHomeComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
