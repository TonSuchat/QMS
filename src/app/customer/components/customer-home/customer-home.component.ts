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
  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {}
}
