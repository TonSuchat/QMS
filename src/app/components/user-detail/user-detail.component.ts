import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { User } from "../../shared/user";

@Component({
  selector: "app-user-detail",
  templateUrl: "./user-detail.component.html",
  styleUrls: ["./user-detail.component.css"]
})
export class UserDetailComponent implements OnInit {
  @Input() user: User;
  @Output() editClick: EventEmitter<any> = new EventEmitter();

  constructor() {}

  ngOnInit() {}
}
