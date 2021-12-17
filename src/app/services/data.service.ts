import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json",
    }),
  };

  constructor(private http: HttpClient) {}

  getEmployees(token){
    this.httpOptions = {
      headers: new HttpHeaders({
        "Content-Type1": "application/json",
        Authorization: "Bearer " + token,
      }),
    };

    return this.http.get('https://localhost:44356/api/Security/ValidateToken', this.httpOptions).pipe((response: any) => {
      return response;
    });
  }
}
