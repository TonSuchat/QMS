import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { AuthService } from "../../services/auth.service";

@Component({
  selector: "app-sign-in",
  templateUrl: "./sign-in.component.html",
  styleUrls: ["./sign-in.component.css"]
})
export class SignInComponent implements OnInit {
  signInForm: FormGroup;

  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit() {
    this.initialSignInForm();
  }

  onSubmit() {
    console.log(this.signInForm.value);
    // *******for test only*******
    this.authService.tempLogIsSuccess();
    if (this.signInForm.value.type === "customer")
      this.router.navigate(["/customer"]);
    else this.router.navigate(["/provider"]);
    // *******for test only*******
  }

  initialSignInForm() {
    this.signInForm = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required]),
      type: new FormControl("customer", [Validators.required])
    });
  }
}
