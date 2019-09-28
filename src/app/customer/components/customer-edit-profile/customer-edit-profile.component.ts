import { Component, OnInit } from "@angular/core";
import { NgxSpinnerService } from "ngx-spinner";
import { AuthService } from "src/app/services/auth.service";
import { ApiService } from "src/app/shared/api.service";
import { NzNotificationService } from "ng-zorro-antd/notification";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { User } from "src/app/shared/user";
import { setDirtyAndValidate } from "src/app/utility/helper";

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
    private apiService: ApiService,
    private notification: NzNotificationService
  ) {}

  ngOnInit() {
    this.getUser();
  }

  onSubmit() {
    setDirtyAndValidate(this.editForm);
    if (this.editForm.valid) {
      this.updating = true;
      this.apiService.updateUser(this.user).subscribe(
        _ => {
          this.updating = false;
          // show notification
          this.notification.success("Update success", null);
        },
        err => {
          this.updating = false;
          this.errorMessage = err;
        }
      );
    }
  }

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
