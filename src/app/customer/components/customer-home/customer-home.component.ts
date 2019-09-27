import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { User } from "src/app/shared/user";
import { NgxSpinnerService } from "ngx-spinner";

import { ApiService } from "src/app/shared/api.service";

@Component({
  selector: "app-customer-home",
  templateUrl: "./customer-home.component.html",
  styleUrls: ["./customer-home.component.css"]
})
export class CustomerHomeComponent implements OnInit {
  // listOfData = [
  //   {
  //     key: "1",
  //     name: "John Brown",
  //     age: 32,
  //     address: "New York No. 1 Lake Park"
  //   },
  //   {
  //     key: "2",
  //     name: "Jim Green",
  //     age: 42,
  //     address: "London No. 1 Lake Park"
  //   },
  //   {
  //     key: "3",
  //     name: "Joe Black",
  //     age: 32,
  //     address: "Sidney No. 1 Lake Park"
  //   }
  // ];

  selectedProvider = null;
  providers: User[] = [];
  errorMessage: string = null;

  constructor(
    private apiService: ApiService,
    private spinner: NgxSpinnerService
  ) {}

  ngOnInit() {
    this.getProviders();
  }

  getProviders() {
    this.spinner.show();
    this.apiService.getUserByType("provider").subscribe(
      providers => {
        this.providers = providers;
        this.spinner.hide();
      },
      error => {
        this.errorMessage = error;
      }
    );
  }

  onSelectProvider(data) {
    console.log("in-event", data);
    // get queue list from provider
    // console.log("on-select-changed", this.selectedProvider, event);
  }
}
