export class Student {
  public constructor(
    // tslint:disable-next-line: variable-name
    public fk_user_id:string,
    public  s_id:number,
    public s_address:string,
    public s_availstartdate:string,
    public s_currentstatus:string,
    public s_positionsought:string,
    public s_profilepic:string,
    public s_schoolname:string,
    public s_siporganization:string,
    public s_siptitle:string,
    public s_skills:string,
    public s_awards:string,
    public s_othereducation:string,
    public s_rollno:string,
    public s_name:string,
    public s_emailid:string,
    public s_gender:string,
    public s_dob:string,
    public s_contactno:string,
    public s_currentyear:string,
    public s_tenthper:number,
    public s_twelveper:number,
    public s_fygp:number,
    public s_sygp:number,
    public s_tygp:number,
    public s_forthyeargp:number,
    public s_fifthyeargp:number,
    public fk_stream_id:string,
    public user_id?:string,
    public user_password?:string

  ) { }
}

