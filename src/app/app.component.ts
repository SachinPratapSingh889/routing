import { Component } from '@angular/core';
import { AuthService } from './service/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
// export class AppComponent {
//   title = 'tour-0f-routing';
// }
export class AppComponent{
  title='angularrouting'
  constructor(private authService: AuthService){}
     onLoginClick(){
       this.authService.login()
     }
  onLogoutClick(){
    this.authService.logout();
  }
}