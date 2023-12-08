import { Component } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.css']
})
export class TemplateDrivenFormComponent {
  userModel=new User("amira","amira.mediouni@hotmail.com","e-dinar","123456","25-12-2025",1234)
  submitted=false
  onSubmit(){
   console.log(this.userModel)
   this.submitted=true
   
  }

}
