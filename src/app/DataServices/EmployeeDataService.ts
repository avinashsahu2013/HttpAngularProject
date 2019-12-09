import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/retry';
import 'rxjs/add/observable/of';
import 'rxjs/Rx';

import {employee} from '../Models/Employee';

import {ROOT_URL} from '../Models/Config';
import { Injectable, EventEmitter } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs/Rx';


@Injectable()
export class EmployeeDataService
{
  private messageService = new BehaviorSubject<string>('0');
  currentID = this.messageService.asObservable();

  changeMyID(id: string){
    this.messageService.next(id);
  }

    employeeSelected = new EventEmitter<employee>();

    employees: Observable<employee[]>;
    newemployee: Observable<employee>;

    constructor(private http: HttpClient)
    {

    }



getEmployee()
{
 // alert('getEmployee');
  //const token :  string = localStorage.getItem('currentUser');

  //var headers_object = new HttpHeaders().set("Authorization", "Bearer " + token);
 return this.http.get<employee[]>(ROOT_URL + '/Employees')
}
AddEmployee(emp:employee)
{
  const headers = new HttpHeaders().set('content-type', 'application/json');
  var body = {
                    Fname:emp.Fname,Lname:emp.Lname,Email:emp.Email
             }
  console.log(body);
  return this.http.post<employee>(ROOT_URL + 'Employees', body, {headers});
}


login(myusername: string , mypassword: string) {
  var body = {
    Username : myusername, Password: mypassword
  }
  const headers = new HttpHeaders().set('content-type', 'application/json');
  return this.http.post<any>(ROOT_URL + 'Token', body, {headers})
}


EditEmployee(emp:employee) {
  const params = new HttpParams().set('ID', emp.ID);
  const headers = new HttpHeaders().set('content-type', 'application/json');
  var body = {
                    Fname:emp.Fname,Lname:emp.Lname,Email:emp.Email,ID:emp.ID
             }
        return this.http.put<employee>(ROOT_URL + '/Employees/' + emp.ID,body, {headers,params})

}




DeleteEmployee(emp:employee)
{
    const params = new HttpParams().set('ID', emp.ID);
  const headers = new HttpHeaders().set('content-type', 'application/json');
  var body = {
                    Fname:emp.Fname,Lname:emp.Lname,Email:emp.Email,ID:emp.ID
             }
        return this.http.delete<employee>(ROOT_URL+'/Employees/'+emp.ID)

}

}
