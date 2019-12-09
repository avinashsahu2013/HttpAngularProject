import { Component, OnInit, Input } from '@angular/core';
import { EmployeeDataService } from '../DataServices/EmployeeDataService';
import { Params, ActivatedRoute } from '@angular/router';
import { Route } from '@angular/compiler/src/core';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {
  ID : string;

  constructor(private dataservice: EmployeeDataService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.dataservice.currentID.subscribe(ID => this.ID = ID);
    // reload page
    this.route.params
      .subscribe(
        (params: Params) => {
          alert(params['employeeId']);
          // this.user.id = params['id'];
          // this.user.name = params['name'];
        }
      );
  }

}

