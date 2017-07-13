import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { UserService } from '../../../../services/user/user.service';

@Component({
  selector: 'app-admin-users',
  templateUrl: './admin-users.component.html',
  styleUrls: ['./admin-users.component.styl']
})
export class AdminUsersComponent implements OnInit {
  public form: FormGroup;

  constructor(private _userService: UserService,
              private _formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this._userService.get().subscribe(user => { // TODO
      this.form = this._formBuilder.group({
        "firstname": [user.firstname, Validators.required],
        "lastname":  [user.lastname, Validators.required],
        "email":     [user.email, [Validators.required, Validators.email]]
      });
    });
  }

}
