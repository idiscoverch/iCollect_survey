import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { DatabaseService } from '../services/database.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {

  name: any;
  company_name: any;
  count_survey: any = 0;
  count_issues: any = 0;

  constructor(
    public navCtrl: NavController,
    private db: DatabaseService
  ) { }

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this.db.lastLogedUser().then(usr => {
      this.name = usr.name;
      this.company_name = usr.company_name;

      this.db.getNumberIssue(usr.id_contact).then(data => {
        this.count_issues = data.total;
      });
  
      this.db.getNumberSurvey(usr.id_contact).then(data => {
        this.count_survey = data.total;
      });
    });
  }

  ionRefresh(event) {
    console.log('Pull Event Triggered!');
    setTimeout(() => {
      console.log('Async operation has ended');
      this.loadData();
      //complete()  signify that the refreshing has completed and to close the refresher
      event.target.complete();
    }, 2000);
  }

  ionPull(event) {
    //Emitted while the user is pulling down the content and exposing the refresher.
    console.log('ionPull Event Triggered!' + event);
  }

  ionStart(event) {
    //Emitted when the user begins to start pulling down.
    console.log('ionStart Event Triggered!' + event);
  }

  mySurvey() {
    this.navCtrl.navigateForward(['/my-survey']);
  }

  myIssue() {
    this.navCtrl.navigateForward(['/my-issue']);
  }

  logOut() {
    this.db.logAllOut().then(() => {
      this.navCtrl.navigateRoot(['/login']);
    });
  }

}
