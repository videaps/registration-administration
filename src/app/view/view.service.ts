import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RegistrationList } from '../model/registration.list';

@Injectable({
  providedIn: 'root'
})
export class ViewService {

  constructor(private httpClient: HttpClient) { }

  public readAll<RegistrationList>(): Observable<RegistrationList> {
    console.log('readAll');

    var registrationList = this.httpClient.get<RegistrationList>('/registration/readAll');
    
    console.log('registrationList=', registrationList);
    return registrationList;
  }
}
