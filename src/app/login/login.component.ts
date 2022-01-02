import {Component} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {navigateToUrl} from 'single-spa';




@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  form: FormGroup = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });

  constructor() {
  }

  public submit() {
    // if (this.form.valid) {
    const {username, password} = this.form.value;
    console.log(this.form.value);
    // authService.login(username, password)
    navigateToUrl('/first-angular-app');
    // this.auth.signFakeToken(this.form.value);
    // this.onSubmit.emit(this.form.value);
    // }
  }
}
