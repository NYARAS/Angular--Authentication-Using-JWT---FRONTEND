import { Component, OnInit } from '@angular/core';
import { CalvineService } from 'src/app/Services/calvine.service';
import { SnotifyModule, SnotifyService } from 'ng-snotify';

@Component({
  selector: 'app-request-reset',
  templateUrl: './request-reset.component.html',
  styleUrls: ['./request-reset.component.css']
})
export class RequestResetComponent implements OnInit {
  public form ={
    email: null
  }

  constructor(
    private Calvine: CalvineService,
    private notify: SnotifyService
  ) { }

  ngOnInit() {
  }

  onSubmit()
  {
    this.Calvine.sendPasswordResetLink(this.form).subscribe(
      data =>this.handleResponse(data),
      error => this.notify.error(error.error.error)
    );

  }

  handleResponse(res)
  {
    console.log(res)
    this.form.email = null;
  }

}
