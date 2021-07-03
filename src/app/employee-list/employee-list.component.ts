import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  //using Input() for passing data from parent to child(current) component
  @Input() employeeItem: { type: string, employeeName: string, employeeDesc: string };
  @Input() employeeList;

  constructor() { }

  ngOnInit(): void {
  }

  onDeleteItem(emp) {
    if (this.employeeList) {
      let indexOfItem = this.employeeList.indexOf(emp);
      this.employeeList.splice(indexOfItem, 1);
    }
  }
  getColor(type: string) {
    return type === "Blue Print" ? "#d5b8ea" : "#d6fbc3";
  }

}
