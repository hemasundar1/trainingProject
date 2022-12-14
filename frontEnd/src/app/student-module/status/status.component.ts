import { Component, OnInit } from '@angular/core';
import { StudentServiceService } from 'src/app/Services/studentService/student-service.service';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.css']
})
export class StatusComponent implements OnInit {

  currentUser:any;
  statusValue:any;
  constructor(private studentservice:StudentServiceService) { }


  ngOnInit(): void {
    this.studentservice.getCurrentUser().subscribe(data=>{console.log("current",data),this.currentUser=data});
    this.studentservice.getAlldocuments().subscribe(data=>{console.log("status",data),this.statusValue=data});
  }

}
