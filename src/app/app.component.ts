import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  employeeName: string = "";
  employeeDesc: string = "";
  employeeList = [];

  // example for using ViewChild for template referance variable
  //@ViewChild('nameLocalTemp') employeeNameTemp: ElementRef;

  constructor() {
  }

  onAddEmployee(event) {
    this.employeeList.push({
      "type": "Employee",
      "employeeName": event.employeeName, //this.employeeNameTemp.nativeElement.value = this.employeeName; showing the use of ViewChild here
      "employeeDesc": event.employeeDesc
    });
  }
  onAddBluePrint(event) {
    this.employeeList.push({
      "type": "Blue Print",
      "employeeName": event.employeeName,
      "employeeDesc": event.employeeDesc
    });
  }
  onResetAll() {
    this.employeeList = [];
  }
}
