import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import config from "../../config";
import { handleError } from "../utility/api-errorHandler";
import { catchError, tap } from "rxjs/operators";
import { User } from "./user";

@Injectable({
  providedIn: "root"
})
export class ApiService {
  api_url: string = config.api_url;
  constructor(private http: HttpClient) {}

  // getUser(id: string): Observable<User> {
  //   return this.http
  //     .get<User>(`${this.api_url}/user/profile`)
  //     .pipe(
  //       tap((res: any) => {
  //         if (!res || res === undefined) throw "Not found any response";
  //         // keep token, user in localstorage
  //         localStorage.setItem("token", res.token);
  //         localStorage.setItem("user", JSON.stringify(res.user));
  //       }),
  //       catchError(handleError)
  //     );
  // }
}
