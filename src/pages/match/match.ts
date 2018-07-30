import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { ScreenOrientation } from '@ionic-native/screen-orientation';
import { StatusBar } from '@ionic-native/status-bar';

/**
 * Generated class for the MatchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-match',
  templateUrl: 'match.html',
})
export class MatchPage {
  public matchData = {};
  public topRowPlayers: any[] = [];
  public bottomRowPlayers: any[] = [];
  public topWidth;
  public bottomWidth;
  constructor(public navCtrl: NavController
    , public navParams: NavParams
    , private storage: Storage
    , private screenOrientation: ScreenOrientation
    , private statusBar: StatusBar) {
  }

  ionViewWillEnter() {
    this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.LANDSCAPE);
    this.statusBar.hide();
    this.storage.get('currentMatch').then(currentMatch => {
      
      currentMatch.Players.forEach(player => {
        player.Life = currentMatch.StartingLife;
      })
      var index = 0;
      var halfPoint = Math.ceil(currentMatch.Players.length / 2);
      currentMatch.Players.forEach(player => {
        if (index < halfPoint) {
          this.topRowPlayers.push(player);
          index++;
        } else {
          this.bottomRowPlayers.push(player);
        }
      })

      this.topWidth = 100 / this.topRowPlayers.length;
      this.bottomWidth = 100 / this.bottomRowPlayers.length;
      this.matchData = currentMatch;
      console.log(this.matchData);
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MatchPage');
  }

  addOneLife(player) {
    player.Life++;
    console.log("gain life");
  }

  removeOneLife(player) {
    player.Life--;
    console.log("lose life");
  }

  addTenLife(player) {
    player.Life += 10;
    console.log("press");
  }

  goBack() {
    this.navCtrl.pop();
  }

}
