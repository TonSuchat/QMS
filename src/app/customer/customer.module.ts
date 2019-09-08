import { NgModule } from "@angular/core";
import { routes } from "./customer-routing";
import { RouterModule } from "@angular/router";

import { CustomerHomeComponent } from "./components/customer-home/customer-home.component";

@NgModule({
  declarations: [CustomerHomeComponent],
  imports: [RouterModule.forChild(routes)]
})
export class CustomerModule {}
