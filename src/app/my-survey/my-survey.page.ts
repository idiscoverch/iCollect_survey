import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { DatabaseService } from '../services/database.service';

@Component({
  selector: 'app-my-survey',
  templateUrl: './my-survey.page.html',
  styleUrls: ['./my-survey.page.scss'],
})
export class MySurveyPage implements OnInit {

  results: any[] = [];
  
  constructor(
    private db: DatabaseService,
    public navCtrl: NavController
  ) { }

  ngOnInit() {
    this.results = [];
    this.db.lastLogedUser().then(usr => {
      this.db.loadSurveyResults(usr.id_contact).then(() => {
        this.db.getResults().subscribe(data => {
          this.results = data;
        });
      });
    });
  }

  backToDB() {
    this.navCtrl.navigateBack(['/tabs/tabs/dashboard']);
  }
}
