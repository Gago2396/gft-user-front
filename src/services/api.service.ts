import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'localhost:8080';  // Reemplazar con la URL 

  constructor(private http: HttpClient) { }

  getUsers(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/users`);
  }

  searchUsers(name: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/users/search?name=${name}`);
  }

  addFavorite(data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/users/favorite`, data);
  }

  deleteFavorite(user_id: number, product_id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/users/favorite?user_id=${user_id}&product_id=${product_id}`);
  }


  uploadUsers(data: any[]): Observable<any> {
    return this.http.post(`${this.apiUrl}/users/upload`, data);
  }


}
