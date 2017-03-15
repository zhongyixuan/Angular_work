import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [LoginService]
})
export class LoginComponent implements OnInit {
  getData: any;
  account: accountMD = {
    loginid: "",
    password: ""
  }


  constructor(private _loginService: LoginService) { }

  ngOnInit() {
    $(function () {

      $('#login-form-link').click(function (e) {
        $("#login-form").delay(100).fadeIn(100);
        $("#register-form").fadeOut(100);
        $('#register-form-link').removeClass('active');
        $(this).addClass('active');
        e.preventDefault();
      });
      $('#register-form-link').click(function (e) {
        $("#register-form").delay(100).fadeIn(100);
        $("#login-form").fadeOut(100);
        $('#login-form-link').removeClass('active');
        $(this).addClass('active');
        e.preventDefault();
      });

    });

  }

  login() {
    alert("LOGIN PRESS");
    console.log(this.account);
    this._loginService.addAccount(this.account).subscribe(
      data => this.getData = data,
      error => console.log("ERROR"),
      () => {
        console.log("FINSHED");
        console.log(this.getData);
      }
    );
  }

}

export class accountMD {
  loginid: string;
  password: string;
}