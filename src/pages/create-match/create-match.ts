import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { MatchPage } from '../match/match';
import { AlertController } from 'ionic-angular';
import { ScreenOrientation } from '@ionic-native/screen-orientation';

/**
 * Generated class for the CreateMatchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-create-match',
  templateUrl: 'create-match.html',
})
export class CreateMatchPage {
  public profiles: any[] = [];
  public matchData = { "Players": [], "StartingLife": 40 };
  constructor(public navCtrl: NavController
    , public navParams: NavParams
    , private storage: Storage
    , private alertCtrl: AlertController
    , private screenOrientation: ScreenOrientation) {
  }

  ionViewWillEnter() {
    this.screenOrientation.unlock();
    this.storage.get('profiles').then(profiles => {
      this.profiles = profiles;
    })
  }

  ionViewDidLeave() {
    this.matchData = { "Players": [], "StartingLife": 40 };
  }

  selectProfile(profile) {
    var index = -1;
    this.matchData.Players.forEach(player => {
      if (player.Name == profile.Name) {
        console.log("FOUND MATCH");
        index = this.matchData.Players.indexOf(player);
      }
    })

    if (index == -1) {
      this.matchData.Players.push(profile);
    } else {
      this.matchData.Players.splice(index, 1);
    }

    console.log(this.matchData);
  }

  goToMatchPage() {
    if (this.matchData.Players.length >= 2 && this.matchData.Players.length <= 8) {
      this.storage.set("currentMatch", this.matchData).then(ready => {
        this.navCtrl.push(MatchPage);
      });
    } else if (this.matchData.Players.length > 8) {
      this.alertCtrl.create({
        title: 'Too many players',
        subTitle: 'More than eight players not yet supported',
        buttons: ['Dismiss']
      }).present();
    } else {
      this.alertCtrl.create({
        title: 'Not enough players',
        subTitle: 'Please choose at least two players',
        buttons: ['Dismiss']
      }).present();
      
    }
    
  }

}
