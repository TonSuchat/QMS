import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { BrowserModule } from "@angular/platform-browser";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { NgZorroAntdModule } from "ng-zorro-antd";
import { NgxSpinnerModule } from "ngx-spinner";

import { CustomerHomeComponent } from "./components/customer-home/customer-home.component";
import { CustomerLayoutComponent } from "./components/customer-layout/customer-layout.component";
import { CustomerHistoryComponent } from "./components/customer-history/customer-history.component";
import { CustomerProfileComponent } from "./components/customer-profile/customer-profile.component";
import { UserDetailComponent } from "../components/user-detail/user-detail.component";

@NgModule({
  declarations: [
    CustomerHomeComponent,
    CustomerLayoutComponent,
    CustomerHistoryComponent,
    CustomerProfileComponent,
    UserDetailComponent
  ],
  imports: [
    RouterModule,
    BrowserModule,
    FontAwesomeModule,
    NgZorroAntdModule,
    NgxSpinnerModule
  ]
})
export class CustomerModule {}
