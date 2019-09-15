import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { faLink, faHome, faHistory } from "@fortawesome/free-solid-svg-icons";

import { AuthService } from "src/app/services/auth.service";

@Component({
  selector: "app-customer-home",
  templateUrl: "./customer-home.component.html",
  styleUrls: ["./customer-home.component.css"]
})
export class CustomerHomeComponent implements OnInit {
  listOfData = [
    {
      key: "1",
      name: "John Brown",
      age: 32,
      address: "New York No. 1 Lake Park"
    },
    {
      key: "2",
      name: "Jim Green",
      age: 42,
      address: "London No. 1 Lake Park"
    },
    {
      key: "3",
      name: "Joe Black",
      age: 32,
      address: "Sidney No. 1 Lake Park"
    }
  ];

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {}
}
