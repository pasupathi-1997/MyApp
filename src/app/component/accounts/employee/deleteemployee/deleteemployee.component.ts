import { Component } from '@angular/core';
import { DisplayComponent } from '../../../display/display.component';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
// import { Employee } from '../../../../model/employee';

@Component({
  selector: 'app-deleteemployee',
  standalone: true,
  imports: [DisplayComponent,CommonModule,FormsModule],
  templateUrl: './deleteemployee.component.html',
  styleUrl: './deleteemployee.component.scss'
})
export class DeleteemployeeComponent {
  //  employee: Employee[] = [];
  //  public employeedata!:Employee;
  //  public employeeid!:number;
  constructor(private activateroute:ActivatedRoute){}
  ngOnInit(): void {
    // this.activateroute.params.subscribe((param:Params)=>{
    //   this.employeeid = param['id'];
    // })
    // this.api.fetchdata(this.employeeid).subscribe((employee:Employee)=>{
    //   this.employeedata=student;
    //   console.log(this.employeedata);
    // })
  }
  confirm(){
    // this.employeedata.employee.then((result:any)=>{
    //   console.log(result);
    //   if(result){
    //     this.api.deleteemployee(this.id).subscribe(res=>{
    //       //alert("Employee Deleted Successfully");
    //       this.getemployee();
    //     })
    //   }
    // })

  }
  cancel(){

  }
}
