import { Component, OnInit } from '@angular/core';
import { StudentdataService } from 'src/app/studentdata.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-edit-my-profile',
  templateUrl: './edit-my-profile.component.html',
  styleUrls: ['./edit-my-profile.component.css']
})
export class EditMyProfileComponent implements OnInit {

  constructor(public _studentdata:StudentdataService) { }
  userform: FormGroup;
  ngOnInit() {
    this.userform = new FormGroup({
            fk_user_id: new FormControl(null),
            s_address: new FormControl(null),
            s_availstartdate: new FormControl(null),
            s_awards:new FormControl(null),
            s_currentstatus:new FormControl(null),
            s_othereducation:new FormControl(null),
            s_positionsought:new FormControl(null),
            s_profilepic:new FormControl(null),
            s_schoolname:new FormControl(null),
            s_siporgainization:new FormControl(null),
            s_siptitle:new FormControl(null),
            s_skills:new FormControl(null)

          });
        }
        onStudentadd(){
          let studentobj={
            s_address: this.userform.value.s_address,
            s_availstartdate: this.userform.value.s_availstartdate,
            s_awards:this.userform.value.s_awards,
            s_currentstatus:this.userform.value.s_currentstatus,
            s_othereducation:this.userform.value.s_othereducation,
            s_positionsought:this.userform.value.s_positionsought,
            s_profilepic:this.userform.value.s_profilepic,
            s_schoolname:this.userform.value.s_schoolname,
            s_siporgainization:this.userform.value.s_siporgainization,
            s_siptitle:this.userform.value.s_siptitle,
            s_skills:this.userform.value.s_skills

          };
          this._studentdata.addStudent(studentobj).subscribe(
              (data: any) => {
               alert('added');
               //this._router.navigate(['']);
              }

             );
  }

}
