import { AuthInterceptor } from './jwt.interceptor';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import {FormsModule} from '@angular/forms'
import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeeHomeComponent } from './employee-home/employee-home.component';

import {EmployeeDataService} from './DataServices/EmployeeDataService';

import { Routes, RouterModule } from '@angular/router';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LoginComponent } from './login/login.component';

const appRoutes: Routes = [
  {path: '' , component : LoginComponent},
  { path: 'Employee', component: EmployeeHomeComponent },
  { path: 'employeedetails/:employeeId', component: EmployeeDetailsComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    EmployeeHomeComponent,
    EmployeeDetailsComponent,
    PageNotFoundComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule, HttpClientModule, FormsModule,
    RouterModule.forRoot(
      appRoutes
    )
  ],
  providers: [EmployeeDataService,
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
