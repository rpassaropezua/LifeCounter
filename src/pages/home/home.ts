import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ProfilesPage } from '../profiles/profiles';
import { CreateMatchPage } from '../create-match/create-match';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, private storage: Storage) {
    
  }

  ionViewDidLoad() {
    console.log("in ion view did load of home");
    this.storage.get('profiles').then(profiles => {
      if (profiles == null) {
        this.storage.set('profiles', []).then(value => {
          console.log(value);
        });
      }
      console.log(profiles.length);
      console.log(typeof (profiles) == typeof ([]));
    })
  }

  goToProfiles() {
    this.navCtrl.push(ProfilesPage);
  }

  goToCreateMatch() {
    this.navCtrl.push(CreateMatchPage);
  }
}
