import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  employeeName: string = "";
  employeeDesc: string = "";
  isDataNotAvailable: boolean = true;

  @Output() employeeAdded = new EventEmitter<{ employeeName: string, employeeDesc: string }>();
  @Output() bluePrintAdded = new EventEmitter<{ employeeName: string, employeeDesc: string }>();
  @Output() employeeDeleted = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  onAddEmployee() {
    this.employeeAdded.emit({
      employeeName: this.employeeName,
      employeeDesc: this.employeeDesc
    });
    this.clearAll();
  }
  onAddBluePrint() {
    this.bluePrintAdded.emit({
      employeeName: this.employeeName,
      employeeDesc: this.employeeDesc
    });
    this.clearAll();
  }
  onResetAll() {
    this.employeeDeleted.emit();
    this.isDataNotAvailable = true;
  }
  employeeNameAdded() {
    this.isDataNotAvailable = false;
  }
  clearAll() {
    this.employeeName = "";
    this.employeeDesc = "";
  }
}
