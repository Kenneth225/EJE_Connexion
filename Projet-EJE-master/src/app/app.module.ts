import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { HttpClientModule } from '@angular/common/http'; 
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HttpModule } from '@angular/http';
import { IonicStorageModule } from '@ionic/storage';
import { PostProviders } from '../providers/post-providers';
import { DonsangPage } from '../pages/donsang/donsang';
import { TabsPage } from '../pages/tabs/tabs';
import { QuizhePage } from '../pages/quizhe/quizhe';
import { QuizfePage } from '../pages/quizfe/quizfe';
import { DevdonneurPage } from '../pages/devdonneur/devdonneur';
import { ActufoPage } from '../pages/actufo/actufo';
import { InscripPage } from '../pages/inscrip/inscrip';
import { LoginPage } from '../pages/login/login';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TabsPage,
    DonsangPage,
    QuizhePage,
    QuizfePage,
    DevdonneurPage,
    ActufoPage,
    LoginPage,
    InscripPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpModule,
    IonicStorageModule.forRoot(),
    IonicModule.forRoot(MyApp),
    
 

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    InscripPage,
    TabsPage,
    DonsangPage,
    QuizhePage,
    QuizfePage,
    DevdonneurPage,
    ActufoPage,
    LoginPage
  ],
  providers: [
    StatusBar,
    PostProviders,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
