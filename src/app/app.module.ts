import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { ScreenOrientation } from '@ionic-native/screen-orientation';
import { Insomnia } from '@ionic-native/insomnia';

import { MyApp } from './app.component';
import { IonicStorageModule } from '@ionic/storage';
import { HomePage } from '../pages/home/home';
import { ProfilesPage } from '../pages/profiles/profiles';
import { CreateProfilePage } from '../pages/create-profile/create-profile';
import { CreateMatchPage } from '../pages/create-match/create-match';
import { MatchPage } from '../pages/match/match';
import { ViewPlayerPage } from '../pages/view-player/view-player';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ProfilesPage,
    CreateProfilePage,
    CreateMatchPage,
    MatchPage,
    ViewPlayerPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ProfilesPage,
    CreateProfilePage,
    CreateMatchPage,
    MatchPage,
    ViewPlayerPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    ScreenOrientation,
    Insomnia,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
