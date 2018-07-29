import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ProfilesPage } from '../profiles/profiles';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {
    
  }

  ionViewDidLoad() {
    console.log("in ion view did load of home");
    if (typeof(JSON.parse(localStorage.getItem("profiles"))) != typeof([])) {
      var savedProfiles = [];
      localStorage.setItem("profiles", JSON.stringify(savedProfiles));
      console.log(JSON.parse(localStorage.getItem("profiles")));
    }
  }

  goToProfiles() {
    this.navCtrl.push(ProfilesPage);
  }
}
