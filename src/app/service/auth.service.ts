import { Injectable } from '@angular/core';
import { signInWithEmailAndPassword,Auth,createUserWithEmailAndPassword,signOut }  from '@angular/fire/auth'

interface loginData{
  email:string,
  password:string
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private auth:Auth
  ) { }

  login( {email,password}:loginData ){
    return signInWithEmailAndPassword(this.auth, email,password  )
  }

  register({ email, password }: loginData) {
    return createUserWithEmailAndPassword(this.auth, email, password);
  }

  logout() {
    return signOut(this.auth);
  }




}


//need to create a separate module for auth like auth.module.ts
