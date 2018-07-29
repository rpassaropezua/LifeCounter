import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the CreateProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-create-profile',
  templateUrl: 'create-profile.html',
})
export class CreateProfilePage {
  public profile = { "Name": "", "Theme": "", "GamesWon":0, "GamesPlayed":0};
  public themes = ["primary", "secondary", "danger", "light", "dark"];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CreateProfilePage');
  }

  saveNewProfile() {
    var profiles = JSON.parse(localStorage.getItem("profiles"));
    profiles.push(this.profile);
    localStorage.setItem("profiles", JSON.stringify(profiles));
    
    this.navCtrl.pop();
  }

}
