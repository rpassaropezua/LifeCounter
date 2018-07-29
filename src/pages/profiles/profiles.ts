import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CreateProfilePage } from '../create-profile/create-profile';
import { Storage } from '@ionic/storage';


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
  public profiles: any[] = [];
  constructor(public navCtrl: NavController, public navParams: NavParams, public storage: Storage) {
    this.storage.ready().then(ready => {
      this.loadProfileList();
    });
    
  }

  ionViewDidLoad() {
    this.storage.ready().then(ready => {
      this.loadProfileList();
    });
  }

  ionViewWillEnter() {
    this.storage.ready().then(ready => {
      this.loadProfileList();
    });
  }

  loadProfileList() {
    this.storage.get('profiles').then(profiles => {
      this.profiles = profiles;
    })
    
  }

  goToAddNewProfile() {
    this.navCtrl.push(CreateProfilePage);
  }

  deleteProfile(profile) {
    var index = this.profiles.indexOf(profile);
    this.profiles.splice(index, 1);
    this.storage.set('profiles', this.profiles);
  }

}
