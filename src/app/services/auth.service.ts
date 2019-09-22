import { Injectable } from "@angular/core";
import config from "../../config";
import { Router } from "@angular/router";
import { User } from "../shared/user";
import { handleError } from "../utility/api-errorHandler";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { catchError, tap } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  api_url: string = config.api_url;
  headers = new HttpHeaders().set("Content-Type", "application/json");

  constructor(private http: HttpClient, private router: Router) {}

  isAuthenticated(): boolean {
    const token = this.getToken();
    const user = this.getCurrentUser();
    return token && token !== undefined && token.length > 0 && user
      ? true
      : false;
  }

  getToken(): string {
    return localStorage.getItem("token");
  }

  getCurrentUser(): any {
    const user = localStorage.getItem("user");
    return user && user !== undefined ? JSON.parse(user) : null;
  }

  private keepDataIntoLocalStorage(token, user) {
    // keep token, user in localstorage
    localStorage.setItem("token", token);
    localStorage.setItem("user", JSON.stringify(user));
  }

  register(user: any): Observable<User> {
    return this.http
      .post<User>(`${this.api_url}/account/register`, user)
      .pipe(catchError(handleError));
  }

  signin({ email, password, type }): Observable<any> {
    return this.http
      .post(`${this.api_url}/account/signin`, { email, password, type })
      .pipe(
        tap((res: any) => {
          if (!res || res === undefined) throw "Not found any response";
          // keep token, user in localstorage
          this.keepDataIntoLocalStorage(res.token, res.user);
        }),
        catchError(handleError)
      );
  }

  signout() {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    return this.router.navigate(["/signin"]);
  }
}
