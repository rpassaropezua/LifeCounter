import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { ScreenOrientation } from '@ionic-native/screen-orientation';
import { StatusBar } from '@ionic-native/status-bar';
import { AlertController } from 'ionic-angular';
import { Insomnia } from '@ionic-native/insomnia';
import { ModalController } from 'ionic-angular';
import { ViewPlayerPage } from '../view-player/view-player';

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
    , private statusBar: StatusBar
    , private alertCtrl: AlertController
    , private insomnia: Insomnia
    , private modalCtrl: ModalController) {
  }


  ionViewWillEnter() {
    console.log("in view will enter");
    this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.LANDSCAPE);
    this.insomnia.keepAwake();
    this.statusBar.overlaysWebView(false);
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

  ionViewWillLeave() {
    this.insomnia.allowSleepAgain();
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

  goBack() {
    this.navCtrl.pop();
  }

  addXLife(player) {
    let alert = this.alertCtrl.create({
      title: 'Gain X life',
      inputs: [
        {
          name: 'xLife',
          type: 'number'
        }],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel'
        },
        {
          text: 'Confirm',
          handler: data => {
            player.Life += parseInt(data.xLife);
          }
        }]
    });
    alert.present();
  }

  loseXLife(player) {
    let alert = this.alertCtrl.create({
      title: 'Lose X life',
      inputs: [
        {
          name: 'xLife',
          type: 'number'
        }],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel'
        },
        {
          text: 'Confirm',
          handler: data => {
            player.Life -= parseInt(data.xLife);
          }
        }]
    });
    alert.present();
  }

  openPlayerMenu(player) {
    let playerMenu = this.modalCtrl.create(ViewPlayerPage, player);
    playerMenu.present();
  }
}
