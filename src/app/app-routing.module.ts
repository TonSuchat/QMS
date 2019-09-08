import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { GuestGuardService as GuestGuard } from "./services/guest-guard.service";

import { SignInComponent } from "./components/sign-in/sign-in.component";

const routes: Routes = [
  { path: "", redirectTo: "signin", pathMatch: "full" },
  { path: "signin", component: SignInComponent, canActivate: [GuestGuard] },
  {
    path: "customer",
    pathMatch: "full",
    redirectTo: "customer/home"
  },
  {
    path: "provider",
    pathMatch: "full",
    redirectTo: "provider/home"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
