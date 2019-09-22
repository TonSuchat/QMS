import { Component, OnInit } from "@angular/core";
import {
  FormGroup,
  FormControl,
  Validators,
  AbstractControl,
  ValidationErrors
} from "@angular/forms";
import { Router } from "@angular/router";
import { AuthService } from "../../services/auth.service";
import { setDirtyAndValidate } from "src/app/utility/helper";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css"]
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  errorMessage: string = null;
  registerFetching: boolean = false;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {
    this.initialRegisterForm();
  }

  onSubmit() {
    setDirtyAndValidate(this.registerForm);
    if (this.registerForm.valid) {
      this.registerFetching = true;
      // call api to register user
      this.authService.register(this.registerForm.value).subscribe(
        _ => {
          // signin
          const signinObj = {
            email: this.registerForm.get("email").value,
            password: this.registerForm.get("password").value,
            type: this.registerForm.get("type").value
          };
          this.authService.signin(signinObj).subscribe(_ => {
            // redirect to customer/provider site
            if (this.registerForm.value.type === "customer")
              this.router.navigate(["/customer"]);
            else this.router.navigate(["/provider"]);
          });
        },
        error => {
          this.errorMessage = error;
          this.registerFetching = false;
        }
      );
    }
  }

  matchValues(matchTo: string): (AbstractControl) => ValidationErrors | null {
    return (control: AbstractControl): ValidationErrors | null => {
      return !!control.parent &&
        !!control.parent.value &&
        control.value === control.parent.controls[matchTo].value
        ? null
        : { isMatching: false };
    };
  }

  initialRegisterForm() {
    this.registerForm = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required]),
      confirmPassword: new FormControl(null, [
        Validators.required,
        this.matchValues("password")
      ]),
      type: new FormControl("customer", [Validators.required]),
      firstName: new FormControl(null, [Validators.required]),
      lastName: new FormControl(null, [Validators.required]),
      mobilePhone: new FormControl(null, [Validators.required]),
      address: new FormControl(null)
    });
  }
}
