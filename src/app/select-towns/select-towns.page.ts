import { Component, OnInit } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { DatabaseService } from '../services/database.service';

@Component({
  selector: 'app-select-towns',
  templateUrl: './select-towns.page.html',
  styleUrls: ['./select-towns.page.scss'],
})
export class SelectTownsPage implements OnInit {

  nb_towns: any;

  constructor(
    public navCtrl: NavController,
    private alertCtrl: AlertController,
    public translate: TranslateService,
    private db: DatabaseService
  ) { }

  ngOnInit() {
    this.db.countTowns().then(data => {
      this.nb_towns = data.total;
    });
  }

  byRegion() {
    this.navCtrl.navigateForward(['/region']);
  }

  town() {
    if(this.nb_towns > 0) {
      this.navCtrl.navigateForward(['/town']);
    } else {
      this.translate.get('NO_TOWNS').subscribe(value => {
        this.presentAlert(value, 'Info');
      });
    }
  }

  backToDetails() {
    this.navCtrl.navigateBack(['/tabs/tabs/project-list']);
  }

  async presentAlert(message, title) {
    const alert = await this.alertCtrl.create({
      message: message,
      subHeader: title,
      buttons: ['OK']
    });
    alert.present();
  }
}
