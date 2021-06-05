import { Component, OnInit, Input} from '@angular/core';
import { Router } from '@angular/router';




@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  isValid: any;
  routerLinks: string =''

  constructor(private router: Router) { }


  ngOnInit(){
    this.routerLinks = this.router.url
    this.routerLinks === '/home'?  this.isValid = true : this.isValid = false;
    this.routerLinks = ''
  }


}
