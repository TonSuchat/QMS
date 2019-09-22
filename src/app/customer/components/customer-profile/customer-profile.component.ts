import { Component, OnInit } from "@angular/core";
import { NgxSpinnerService } from "ngx-spinner";

import { AuthService } from "src/app/services/auth.service";
import { ApiService } from "src/app/shared/api.service";
import { User } from "src/app/shared/user";

@Component({
  selector: "app-customer-profile",
  templateUrl: "./customer-profile.component.html",
  styleUrls: ["./customer-profile.component.css"]
})
export class CustomerProfileComponent implements OnInit {
  fetching: boolean = false;
  user: User = null;
  errorMessage: string = null;

  constructor(
    private authService: AuthService,
    private apiService: ApiService,
    private spinner: NgxSpinnerService
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
}
