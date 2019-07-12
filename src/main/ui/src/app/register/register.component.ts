import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  model: any = {};
  loading = false;

  constructor(
      // private router: Router,
      // private userService: UserService,
      // private alertService: AlertService
      ) { }

      ngOnInit() {
      }
    
  // register() {
  //     this.loading = true;
  //     this.userService.create(this.model)
  //         .subscribe(
  //             data => {
  //                 // set success message and pass true paramater to persist the message after redirecting to the login page
  //                 this.alertService.success('Registration successful', true);
  //                 this.router.navigate(['/login']);
  //             },
  //             error => {
  //                 this.alertService.error(error);
  //                 this.loading = false;
  //             });
  // }
}
