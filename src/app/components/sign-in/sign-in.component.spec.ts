import {
  async,
  ComponentFixture,
  TestBed,
  tick,
  fakeAsync
} from "@angular/core/testing";
import { RouterTestingModule } from "@angular/router/testing";
import { NgZorroAntdModule } from "ng-zorro-antd";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { SignInComponent } from "./sign-in.component";
import { CustomerLayoutComponent } from "src/app/customer/components/customer-layout/customer-layout.component";
import { AuthService } from "../../services/auth.service";
import { of } from "rxjs";
import { Router } from "@angular/router";

class AuthServiceSpy {
  mockUserObj = {
    firstName: "test",
    lastName: "test",
    mobilePhone: "0891234567",
    type: "customer",
    email: "",
    password: ""
  };

  signin = jasmine.createSpy("signin").and.returnValue(of(this.mockUserObj));
}

let router = {
  navigate: jasmine.createSpy("navigate")
};

fdescribe("SignInComponent", () => {
  let component: SignInComponent;
  let fixture: ComponentFixture<SignInComponent>;
  let asSpy: AuthServiceSpy;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SignInComponent, CustomerLayoutComponent],
      imports: [
        RouterTestingModule.withRoutes([
          { path: "customer", component: CustomerLayoutComponent }
        ]),
        ReactiveFormsModule,
        NgZorroAntdModule,
        FormsModule,
        HttpClientModule
      ],
      providers: [
        { provide: AuthService, useClass: AuthServiceSpy },
        { provide: Router, useValue: router }
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    asSpy = fixture.debugElement.injector.get(AuthService) as any;
  });

  fit("should initial signin form success", () => {
    expect(component.signInForm).toBeTruthy();
  });

  fit("should signin success", fakeAsync(() => {
    const signinNe: HTMLElement = fixture.debugElement.nativeElement;
    // fill email
    const emailInput: HTMLInputElement = signinNe.querySelector("#email");
    emailInput.value = "test@mail.com";
    emailInput.dispatchEvent(new Event("input"));
    // fill password
    const passwordInput: HTMLInputElement = signinNe.querySelector("#password");
    passwordInput.value = "123456";
    passwordInput.dispatchEvent(new Event("input"));
    // select type
    const typeRadio: HTMLOptionElement = signinNe.querySelector("#type");
    typeRadio.value = "customer";
    typeRadio.dispatchEvent(new Event("option"));
    // trigger submit form
    const signinButton: HTMLButtonElement = signinNe.querySelector("#loginBtn");
    signinButton.click();
    expect(asSpy.signin).toHaveBeenCalled();
    tick(); // wait for async signin to complete
    // expect(router.navigate).toHaveBeenCalledWith(["/customer"]);
  }));
});
