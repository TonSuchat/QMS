import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { CustomerHomeComponent } from "./components/customer-home/customer-home.component";
import { NavigationBarComponent } from "../components/navigation-bar/navigation-bar.component";
import { CustomerLayoutComponent } from './components/customer-layout/customer-layout.component';
import { CustomerHistoryComponent } from './components/customer-history/customer-history.component';

@NgModule({
  declarations: [CustomerHomeComponent, NavigationBarComponent, CustomerLayoutComponent, CustomerHistoryComponent],
  imports: [RouterModule, FontAwesomeModule]
})
export class CustomerModule {}
