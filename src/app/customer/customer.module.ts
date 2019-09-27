import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { RouterModule } from "@angular/router";
import { BrowserModule } from "@angular/platform-browser";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { NgZorroAntdModule } from "ng-zorro-antd";
import { NgxSpinnerModule } from "ngx-spinner";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { CustomerHomeComponent } from "./components/customer-home/customer-home.component";
import { CustomerLayoutComponent } from "./components/customer-layout/customer-layout.component";
import { CustomerHistoryComponent } from "./components/customer-history/customer-history.component";
import { CustomerProfileComponent } from "./components/customer-profile/customer-profile.component";
import { UserDetailComponent } from "../components/user-detail/user-detail.component";
import { CustomerEditProfileComponent } from "./components/customer-edit-profile/customer-edit-profile.component";

@NgModule({
  declarations: [
    CustomerHomeComponent,
    CustomerLayoutComponent,
    CustomerHistoryComponent,
    CustomerProfileComponent,
    UserDetailComponent,
    CustomerEditProfileComponent
  ],
  imports: [
    RouterModule,
    BrowserModule,
    FontAwesomeModule,
    NgZorroAntdModule,
    NgxSpinnerModule,
    FormsModule,
    ReactiveFormsModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CustomerModule {}
