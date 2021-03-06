import { Component, OnInit } from "@angular/core";
import { NgxSpinnerService } from "ngx-spinner";
import { Router } from "@angular/router";

import { AuthService } from "src/app/services/auth.service";
import { ApiService } from "src/app/shared/api.service";
import { User } from "src/app/shared/user";

@Component({
  selector: "app-customer-profile",
  templateUrl: "./customer-profile.component.html",
  styleUrls: ["./customer-profile.component.css"]
})
export class CustomerProfileComponent implements OnInit {
  user: User = null;
  errorMessage: string = null;

  constructor(
    private authService: AuthService,
    private apiService: ApiService,
    private spinner: NgxSpinnerService,
    private router: Router
  ) {}

  ngOnInit() {
    this.getUser();
  }

  getUser() {
    this.spinner.show();
    const user = this.authService.getCurrentUser();
    // call api to get user detail
    this.apiService.getUser(user._id).subscribe(
      user => {
        this.user = user;
        this.spinner.hide();
      },
      err => {
        this.errorMessage = err;
        this.spinner.hide();
      }
    );
  }

  editClick() {
    // redirect to edit profile page
    this.router.navigate(["/customer/editProfile"]);
  }
}
