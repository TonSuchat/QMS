import { Injectable } from "@angular/core";
import config from "../../config";
import { User } from "../shared/user";
import { handleError } from "../utility/api-errorHandler";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { catchError } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  api_url: string = config.api_url;
  headers = new HttpHeaders().set("Content-Type", "application/json");

  tempAuthen: boolean = false;
  constructor(private http: HttpClient) {}

  isAuthenticated(): boolean {
    return this.tempAuthen;
  }

  tempLogIsSuccess(): void {
    this.tempAuthen = true;
  }

  signin({ email, password, type }): Observable<any> {
    return this.http
      .post(`${this.api_url}/account/signin`, { email, password, type })
      .pipe(catchError(handleError));
  }

  tempLogOut(): void {
    this.tempAuthen = false;
  }
}
