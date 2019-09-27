import { Component, OnInit } from "@angular/core";
import { AuthService } from "src/app/services/auth.service";
import { Router } from "@angular/router";
import { faLink, faHome, faHistory } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: "app-customer-layout",
  templateUrl: "./customer-layout.component.html",
  styleUrls: ["./customer-layout.component.css"]
})
export class CustomerLayoutComponent implements OnInit {
  isCollapsed = false;
  faLink = faLink;
  faHome = faHome;
  faHistory = faHistory;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {}

  signOut(): void {
    this.authService.signout();
  }
}
