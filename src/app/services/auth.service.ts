import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  tempAuthen: boolean = false;
  constructor() {}

  isAuthenticated(): boolean {
    return this.tempAuthen;
  }

  tempLogIsSuccess(): void {
    this.tempAuthen = true;
  }

  tempLogOut(): void {
    this.tempAuthen = false;
  }
}
