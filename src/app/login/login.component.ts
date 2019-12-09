import { EmployeeDataService } from './../DataServices/EmployeeDataService';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
public myusername: string;
public mypassword: string;
  constructor(private dataservice : EmployeeDataService, private router : Router) { }

  ngOnInit() {
    //this.myusername = 'aaa';
  }

  login(){
    this.dataservice.login(this.myusername , this.mypassword).subscribe( res => {
       console.log(res);
       localStorage.setItem('currentUser', res.token);//JSON.stringify({ token: res.token, name: this.myusername }));

      this.router.navigate(['/Employee']);
      })
      // , err => {
      //   console.log('Error Occured ' + err);
      // };
  }

}
