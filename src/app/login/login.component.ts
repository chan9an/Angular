import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  
    use: string =""
    pas: string =""
    ema: string=""
    cp: string=""
  validate(data:any){
    console.log("Form submitted Succesfully",data.value.username);
  }
  validatepass():boolean{
    return this.pas===this.cp;
  }
}


