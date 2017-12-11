import { Component } from '@angular/core';
import { User } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'the Forms App';
  user = new User();
  users: Array<Object> = [];

  onSubmit() {
    this.users.push(this.user);
    this.user = new User;
  }


}
