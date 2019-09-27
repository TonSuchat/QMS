import { Component, OnInit } from "@angular/core";
import { NgxSpinnerService } from "ngx-spinner";
import { AuthService } from "src/app/services/auth.service";
import { ApiService } from "src/app/shared/api.service";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { User } from "src/app/shared/user";

@Component({
  selector: "app-customer-edit-profile",
  templateUrl: "./customer-edit-profile.component.html",
  styleUrls: ["./customer-edit-profile.component.css"]
})
export class CustomerEditProfileComponent implements OnInit {
  editForm: FormGroup;
  user: User = null;
  updating: boolean = false;
  errorMessage: string = null;

  constructor(
    private authService: AuthService,
    private spinner: NgxSpinnerService,
    private apiService: ApiService
  ) {}

  ngOnInit() {
    this.getUser();
  }

  onSubmit() {}

  getUser() {
    this.spinner.show();
    const user = this.authService.getCurrentUser();
    // call api to get user detail
    this.apiService.getUser(user._id).subscribe(
      user => {
        this.user = user;
        // initial edit form
        this.initialEditForm();
        this.spinner.hide();
      },
      err => {
        this.errorMessage = err;
        this.spinner.hide();
      }
    );
  }

  initialEditForm() {
    this.editForm = new FormGroup({
      firstName: new FormControl(this.user.firstName, [Validators.required]),
      lastName: new FormControl(this.user.lastName, [Validators.required]),
      mobilePhone: new FormControl(this.user.mobilePhone, [
        Validators.required
      ]),
      address: new FormControl(this.user.address)
    });
  }
}
