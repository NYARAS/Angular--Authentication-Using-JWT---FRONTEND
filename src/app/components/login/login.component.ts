import { Component, OnInit } from '@angular/core';
import { CalvineService } from 'src/app/Services/calvine.service';
import { Router } from '@angular/router';
import { TokenService } from 'src/app/Services/token.service';
import { AuthService } from 'src/app/Services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public form = {
    email: null,
    password: null
  }

  public error = null;

  constructor(
    private Calvine: CalvineService,
    private Token: TokenService,
    private router: Router,
    private Auth: AuthService



   ) { }




  onSubmit(){
  this.Calvine.login(this.form).subscribe(
      data =>this.handleResponse(data),
      error => this.handleError(error)
    );

  }

  handleResponse(data)
  {
    this.Token.handle(data.access_token);
    this.Auth.changeAuthStatus(true);
    this.router.navigateByUrl('/profile');
  }

  handleError(error){
    this.error = error.error.error;
  }

  ngOnInit() {
  }

}
