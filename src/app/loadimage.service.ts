import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoadimageService {
  images: any[];
  constructor(private http: HttpClient) { }

  public getImages(): Observable<any> {
    return this.http.get("../assets/image.json")

  }
}