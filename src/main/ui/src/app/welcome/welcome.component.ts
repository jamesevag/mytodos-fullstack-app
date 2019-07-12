import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WelcomeDataService } from '../service/data/welcome-data.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  name:'';
  messageResp:''
  constructor(private route:ActivatedRoute,private welcomeService: WelcomeDataService) { }

  ngOnInit() {
    this.name=this.route.snapshot.params['name'];
  }

  getMessage(){
    return this.welcomeService.executeHelloWorldBeanService().subscribe(
      response => this.handleSuccessfullResponse(response),
      error=> this.handleErrorResponse(error)
    );
  }


  handleSuccessfullResponse(response){
    this.messageResp = response.message;
  }

  handleErrorResponse(response){
    this.messageResp = response.error.message;
  }
}
