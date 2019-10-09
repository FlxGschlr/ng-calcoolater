import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http: HttpClient) {}

  do(text: string): Promise<string> {
    return this.http.post<string>('TODO', {request: text}).toPromise();
  }
}
