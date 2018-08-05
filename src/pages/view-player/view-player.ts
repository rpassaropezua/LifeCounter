import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ViewController } from 'ionic-angular/navigation/view-controller';

/**
 * Generated class for the ViewPlayerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-view-player',
  templateUrl: 'view-player.html',
})
export class ViewPlayerPage {
  public player;
  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
    this.player = this.navParams.data;
  }

  addDamage(opponent) {
    if (opponent.CommanderDamage + 1 <= 21) {
      opponent.CommanderDamage++;
    }
  }

  removeDamage(opponent) {
    if (opponent.CommanderDamage - 1 >= 0) {
      opponent.CommanderDamage--;
    }
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

}
