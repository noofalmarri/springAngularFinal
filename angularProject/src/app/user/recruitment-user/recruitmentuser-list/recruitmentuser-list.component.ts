import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {User} from "../../user";
import {RecruitmentUserService} from "../recruitment-user.service";

@Component({
  selector: 'app-recruitmentuser-list',
  templateUrl: './recruitmentuser-list.component.html',
  styleUrls: ['./recruitmentuser-list.component.css']
})
export class RecruitmentuserListComponent implements OnInit {

  loginForm: FormGroup;
  invalidLogin: boolean = false;
  id: string;
  constructor(private formBuilder: FormBuilder, private router: Router, private recruitmentUserService: RecruitmentUserService) { }

  onSubmit() {
    if (this.loginForm.invalid) {
      return;
    }
    const user = new User();
    user.username = this.loginForm.controls.username.value;
    user.password = this.loginForm.controls.password.value;
    // {
    //   username: this.loginForm.controls.username.value,
    //   password: this.loginForm.controls.password.value
    // }
    this.recruitmentUserService.login(user).subscribe(data => {
      debugger;
      if(!data.loggedIn) {
        this.router.navigate(['/recruitment']);
      }else {
        this.invalidLogin = true;
        alert("User already Logged In");
      }
    });
  }

  getUserId(){
    let id = this.loginForm.controls.username.value;
    return id;
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.compose([Validators.required])],
      password: ['', Validators.required]
    });
  }

}
