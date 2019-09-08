import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";
import { ReactiveFormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { SignInComponent } from "./components/sign-in/sign-in.component";
import { CustomerHomeComponent } from "./components/customer/customer-home/customer-home.component";
import { ProviderHomeComponent } from "./components/provider/provider-home/provider-home.component";

@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    CustomerHomeComponent,
    ProviderHomeComponent
  ],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
