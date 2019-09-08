import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

import { AuthService } from "src/app/services/auth.service";

@Component({
  selector: "app-customer-home",
  templateUrl: "./customer-home.component.html",
  styleUrls: ["./customer-home.component.css"]
})
export class CustomerHomeComponent implements OnInit {
  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {}

  signOut(): void {
    console.log("signout");
    this.authService.tempLogOut();
    this.router.navigate(["/signin"]);
  }
}
