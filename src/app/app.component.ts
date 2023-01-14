import { Component, ViewChild } from '@angular/core';
import {BreakpointObserver } from '@angular/cdk/layout'
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'RobGameWorld';
  @ViewChild(MatSidenav) sidenav!:MatSidenav;

  constructor(
    private observer:BreakpointObserver
  ){

  }
  // ngAfterViewInit(){
  //   this.observer.observe(['(max-width:1200px)']).subscribe(
  //     (res)=>{
  //       if(res.matches){
  //         this.sidenav.mode = 'over';
  //         this.sidenav.close()
  //       }
  //       else{
  //         this.sidenav.mode='side';
  //         this.sidenav.open()


  //       }
  //     }
  //   )
  // }



}
