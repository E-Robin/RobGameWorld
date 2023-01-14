import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../service/auth.service';

interface loginData{
  name?:string
  email:string,
  password:string
}

@Component({
  selector: 'app-user-auth',
  templateUrl: './user-auth.component.html',
  styleUrls: ['./user-auth.component.scss']
})
export class UserAuthComponent implements OnInit {

  isLoginForm:boolean= true;
  authError:string=''

  constructor( 
    private router:Router,
    private authService:AuthService
   ) { }

  ngOnInit(): void {
    // alert('helo')
  }

  signup(value:loginData){
    this.authService
      .register(value)
      .then((s) => {
        this.router.navigate(['/Dashboard'])
        alert('WElCOME! YOU ARE REGISTER NOW' )  
      })
      .catch((e) => console.log(e.message));

  }

  login(value:loginData){
    this.authService.login(value)
    .then(() => {this.router.navigate(['/Dashboard'])
    alert('WElCOME! YOU ARE lOGIN NOW' )  
  })
      .catch((e) => {console.log(e.message)
      alert('there is an error')  });

    // alert('this is good')
    // this.router.navigate(['./Dashboard'])
    // console.log('hello')
    
  }

  

  toggleForm(){
    this.isLoginForm = !this.isLoginForm

  }
}
