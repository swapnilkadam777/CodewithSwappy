import { Injectable } from '@angular/core';
import { Router } from '@angular/router'; 
import { UserDataInterface } from './login/userData';
@Injectable({
  providedIn: 'root'
})
export class AuthService {  
  userData :UserDataInterface={
    id: null,
    username: '',
    email: '',
    firstName: '',
    lastName: '',
    gender: '',
    image: '',
    token: ''
  };
  constructor(private router: Router ){
       let tempData = sessionStorage.getItem("userData");
       if (tempData) {
        this.userData = JSON.parse(tempData);
      }
  } 
  reset(): void {
    this.userData ={
      id: null,
      username: '',
      email: '',
      firstName: '',
      lastName: '',
      gender: '',
      image: '',
      token: ''
    };
  }
  isAuthenticatedUser(): boolean {
    return this.userData.token !== "";
  }

  logout(): void { 
    this.reset()
    sessionStorage.removeItem("userData")
    this.router.navigate(['/login']); 
  }

  login(data: any){ 
  
    if (data.email === "swapnillearn@gmail.com" && data.password === "Sagar@786") { 
      try {
        fetch('https://dummyjson.com/auth/login', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ 
            username: "kminchelle",
            password: "0lelplR"
          })
        }).then((response:any)=>{
          const responseData =  response.json();
          this.userData = responseData;
          sessionStorage.setItem("userData", JSON.stringify(this.userData));
          this.router.navigate(['/home']); 
        }) 
      } catch (error) {
        console.error('An error occurred during login:', error);
      }
    } else {
      alert("Please enter valid credentials");
      this.logout();  
    } 
  }
}
