import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";
import { AuthService } from "./auth.service";

@Injectable({
  providedIn: "root"
})
export class GuestGuardService implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
    route: import("@angular/router").ActivatedRouteSnapshot,
    state: import("@angular/router").RouterStateSnapshot
  ):
    | boolean
    | import("@angular/router").UrlTree
    | import("rxjs").Observable<boolean | import("@angular/router").UrlTree>
    | Promise<boolean | import("@angular/router").UrlTree> {
    if (this.authService.isAuthenticated()) {
      // redirect to customer, provider home page
      const user = this.authService.getCurrentUser();
      if (user.type === "customer") this.router.navigate(["/customer"]);
      else this.router.navigate(["/provider"]);
      return false;
    } else return true;
  }
}
