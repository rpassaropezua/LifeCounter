import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CreateProfilePage } from '../create-profile/create-profile';

/**
 * Generated class for the ProfilesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profiles',
  templateUrl: 'profiles.html',
})
export class ProfilesPage {
  public profiles: any[];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.loadProfileList();
  }

  ionViewWillEnter() {
    this.loadProfileList();
  }

  loadProfileList() {
    if (localStorage.getItem("profiles")) {
      this.profiles = JSON.parse(localStorage.getItem("profiles"));
      console.log(this.profiles);
    }
  }

  goToAddNewProfile() {
    this.navCtrl.push(CreateProfilePage);
  }

  deleteProfile(profile) {
    var index = this.profiles.indexOf(profile);
    this.profiles.splice(index, 1);
    localStorage.setItem("profiles", JSON.stringify(this.profiles));
    console.log(profile);
  }

}
