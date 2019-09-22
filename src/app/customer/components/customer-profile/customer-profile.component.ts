import { Component, OnInit } from "@angular/core";

import { AuthService } from "src/app/services/auth.service";
import { User } from "src/app/shared/user";

@Component({
  selector: "app-customer-profile",
  templateUrl: "./customer-profile.component.html",
  styleUrls: ["./customer-profile.component.css"]
})
export class CustomerProfileComponent implements OnInit {
  user: User;
  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.getUser();
  }

  getUser() {
    this.user = this.authService.getCurrentUser();
  }
}
