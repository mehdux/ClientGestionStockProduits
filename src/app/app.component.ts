import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ClientGestionStockProduits';

  constructor(private appService: AppService,
              private router: Router){}

  ngOnInit(){
    if(!this.appService.authendicated){
      this.router.navigateByUrl('/login');
    }else{
      this.router.navigateByUrl('/home');
    }
  }
}
