import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';

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
  public themes = ["primary", "light", "dark"];
  constructor(public navCtrl: NavController, public navParams: NavParams, private storage: Storage) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CreateProfilePage');
  }

  saveNewProfile() {
    this.storage.get('profiles').then(profiles => {
      profiles.push(this.profile);
      this.storage.ready().then(ready => {
        if (ready) {
          this.storage.set('profiles', profiles);
          this.navCtrl.pop();
        }
      })
    })
  }

}
