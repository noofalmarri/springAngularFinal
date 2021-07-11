import {Component, OnInit} from '@angular/core';
import {Location} from "@angular/common";
import {User} from "./user/user";
import {Router} from "@angular/router";
import {TokenStorageService} from "./service/token-storage.service";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title: string;
  constructor(private location: Location, private router: Router, private tokenStorageService: TokenStorageService) {
    this.title = 'System';
  }

  onPressBack(){
    this.location.back();
  }

  displayRec = false;
  displayAdlsa = false;
  display = true;

  onPressAdlsa() {
    this.displayAdlsa = true;
    this.display = false;
  }
  onPressRec(){
    this.displayRec = true;
    this.display = false;
  }
  onPressHome(){
    this.display = true;
    this.displayAdlsa = false;
    this.displayRec = false;
  }

  private roles: string[];
  isLoggedIn = false;
  showAdminBoard = false;
  showModeratorBoard = false;
  username: string;

  ngOnInit() {
    this.isLoggedIn = !!this.tokenStorageService.getToken();

    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.roles = user.roles;

      this.showAdminBoard = this.roles.includes('ROLE_ADMIN');
      this.showModeratorBoard = this.roles.includes('ROLE_MODERATOR');

      this.username = user.username;
    }
  }

  logout() {
    this.tokenStorageService.signOut();
    window.location.reload();
  }

}
