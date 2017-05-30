import { Component } from '@angular/core';
import { TranslateService, initTranslation } from './i18n/i18n';
import { UserService } from "../../../services/user.service";
import { InventionService } from "../../../services/invention.service";

@Component({
  selector: 'app-client-invention',
  templateUrl: './client-invention.component.html',
  styleUrls: ['./client-invention.component.styl']
})
export class ClientInventionComponent {
  private translate: TranslateService;
  private selectedOrderBy: any;
  private selectedFilterBy: any;
  private user: any;

  constructor(private translateService: TranslateService,
              private userService: UserService, private inventionService: InventionService) {
    this.translate = initTranslation(translateService);
    this.getUser();
    console.log(this.user);
  }

  getUser () {
    this.userService.get().subscribe(user => this.user = user);
  }

  createInnovation () {
    this.inventionService.create(this.user).subscribe(invention => this.user.inventions.push(invention));
  }

}
