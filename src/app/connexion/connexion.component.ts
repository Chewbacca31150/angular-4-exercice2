import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl, FormBuilder, NgForm } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent {

  form: FormGroup;
  
  constructor(fb: FormBuilder, private route: Router) {
    this.form = fb.group({
      'username': ['', [
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(10)]]
    }
    );
  }

  onSubmit(f: NgForm) {
    this.route.navigate(['/dashboard/' + f.value.username]);
  }


}
