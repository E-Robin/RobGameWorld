
import { Component, ViewChild } from '@angular/core';
import {BreakpointObserver } from '@angular/cdk/layout'
import { MatSidenav } from '@angular/material/sidenav';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  title = 'RobGameWorld';
  @ViewChild(MatSidenav) sidenav!:MatSidenav;

  constructor(
    private observer:BreakpointObserver,
    private auth:AuthService,
    private router:Router
  ){

  }
  ngAfterViewInit(){
    this.observer.observe(['(max-width:1200px)']).subscribe(
      (res)=>{
        if(res.matches){
          this.sidenav.mode = 'over';
          this.sidenav.close()
        }
        else{
          this.sidenav.mode='side';
          this.sidenav.open()


        }
      }
    )
  }

  logout():void {
    console.log('logout button is clicked')
    this.auth.logout()
    .then(() => {this.router.navigate(['/'])
    alert('USER LOGOUT SUCCESSFULLY')})
    .catch((e) => console.log(e.message));

  }


}


