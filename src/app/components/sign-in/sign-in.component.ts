import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { AuthService } from "../../services/auth.service";
import { setDirtyAndValidate } from "../../utility/helper";

@Component({
  selector: "app-sign-in",
  templateUrl: "./sign-in.component.html",
  styleUrls: ["./sign-in.component.css"]
})
export class SignInComponent implements OnInit {
  signInForm: FormGroup;
  errorMessage: string = null;
  signinFetching: boolean = false;

  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit() {
    this.initialSignInForm();
  }

  onSubmit() {
    setDirtyAndValidate(this.signInForm);
    if (this.signInForm.valid) {
      this.signinFetching = true;
      this.authService.signin(this.signInForm.value).subscribe(
        _ => {
          // redirect to customer/provider site
          if (this.signInForm.value.type === "customer")
            this.router.navigate(["/customer"]);
          else this.router.navigate(["/provider"]);
        },
        error => {
          this.errorMessage = error;
          this.signinFetching = false;
        }
      );
    }
  }

  initialSignInForm() {
    this.signInForm = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required]),
      type: new FormControl("customer", [Validators.required])
    });
  }
}
