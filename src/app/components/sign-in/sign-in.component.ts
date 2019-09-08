import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validator, Validators } from "@angular/forms";

@Component({
  selector: "app-sign-in",
  templateUrl: "./sign-in.component.html",
  styleUrls: ["./sign-in.component.css"]
})
export class SignInComponent implements OnInit {
  signInForm: FormGroup;

  constructor() {}

  ngOnInit() {
    this.initialSignInForm();
  }

  onSubmit() {
    console.log(this.signInForm.value);
  }

  initialSignInForm() {
    this.signInForm = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required]),
      type: new FormControl("customer", [Validators.required])
    });
  }
}
