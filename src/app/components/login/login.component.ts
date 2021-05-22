import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {Router} from '@angular/router';
import {AuthModel} from 'src/app/models/authModel';
import {LoginServiceService} from 'src/app/services/login/login-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  grupo: FormGroup = new FormGroup({

    email: new FormControl(),
    password: new FormControl()

  });

  constructor(private router: Router, private log: LoginServiceService) {
  }

  ngOnInit(): void {
  }

  login(): void {





    const auth: AuthModel = {
      email: this.grupo.controls.email.value,
      password: this.grupo.controls.password.value
    };

    if(auth.email=="admin" && auth.password=="admin"){
      this.router.navigate(['/home/productos']);
    }else{
      alert("usuario o contraseña incorrectos")
    }


    /*   this.log.authLogin(auth).subscribe(value => {
         console.log(value);

         this.router.navigate(['/home']);


       });*/

  }

}
