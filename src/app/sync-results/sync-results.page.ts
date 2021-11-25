import { Component, OnInit } from '@angular/core';
import { AlertController, NavController, ToastController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { DatabaseService } from '../services/database.service';
import { NetworkService, ConnectionStatus } from '../services/network.service';
import { HTTP } from '@ionic-native/http/ngx';

@Component({
  selector: 'app-sync-results',
  templateUrl: './sync-results.page.html',
  styleUrls: ['./sync-results.page.scss'],
})
export class SyncResultsPage implements OnInit {

  data: any[] = [];
  created_date: any;

  constructor(
    public http: HTTP,
    public navCtrl: NavController,
    private db: DatabaseService,
    public translate: TranslateService,
    private alertCtrl: AlertController,
    private toastController: ToastController,
    private networkService: NetworkService
  ) { }

  ngOnInit() {
    this.loadData();

    var m = new Date();
    this.created_date = m.getUTCFullYear() + "/" + ("0" + (m.getUTCMonth() + 1)).slice(-2) + "/" + ("0" + m.getUTCDate()).slice(-2) + " " + ("0" + m.getUTCHours()).slice(-2) + ":" + ("0" + m.getUTCMinutes()).slice(-2) + ":" + ("0" + m.getUTCSeconds()).slice(-2);
  }

  loadData() {
    this.db.answersNotSynced().then(() => {
      this.db.getNotSyncedAns().subscribe(data => { 
        this.data = [];
        this.data = data;
      });
    });
  }

  sync() {
    this.networkService.onNetworkChange().subscribe((status: ConnectionStatus) => {
      if (status == ConnectionStatus.Online) {

        var link = 'https://survey.icertification.ch/ords/m/sv/sv_results/';

        this.data.forEach(value => { 
          var myData = JSON.stringify({
            SURVEY_RESPONSE_ID: value.survey_response_id,
            ACTION_TYPE_ID: value.action_type_id,
            QUESTION_ID: value.question_id,
            CRITERIA_ID: value.id_criteria,
            PROJECT_ID: value.project_id,
            SCOPE_ID: value.id_scope,
            PARTNER_ID: value.id_partner,
            TOWN_ID: value.town_id,
            COUNTRY_ID: value.country_id,
            A_LIST_NUMBER: value.a_list_number,
            A_NUMBER: value.a_number, 
            SV_ANSWERS_DEF_ID: value.selectedAnswer,
            CREATED_DATE: value.created_date,
            ID_AGENT: value.id_agent,
            CREATED_BY: value.created_by,
            COORDX: value.coordx,
            COORDY: value.coordy,
            ACCURACY: value.accuracy,
            SV_COMMENT: null,
            COMPLETED: 0,
            COMPLETED_DATE: value.completed_date,
            ISSUE_ID: null,
            SYNC_TO_SERVER: 1,
            SYNC_TO_SERVER_DATE: this.created_date,
            START_TIMESTAMP: value.start_timestamp,
            END_TIMESTAMP: value.end_timestamp,
            DATE_ANSWER: value.date_answer,
            NUMBER_ANSWER: value.number_answer,
            TEXT_ANSWER: value.text_answer,
            GRADE_ANSWER: value.grade_answer,
            YES_NO_ANSWER: value.yes_no_answer,
            LIST_ANSWER: value.list_answer,
            MULTIPLE_ANSWERS: value.multiple_answer,
            SURVEY_UNIQUE_ID: value.survey_unique_id,
            ACTION_ITEM: value.trigger_text,
            ACTION_STATUS: value.status_name,
            ACTION_ID: value.id_action,
            FUNCTION_ID: value.id_function,
            APPEARANCE_ID: value.id_appearance,
            ORG_NAME: value.organisation
          });
    
          this.http.setDataSerializer('utf8');
          this.http.post(link, myData, {})
            .then(() => { 
              this.db.updateAnsSync(value.survey_response_id, this.created_date).then(() => { 
                this.loadData();
              });

            }).catch((error) => {
              console.error('API Error : ', error.status);
              console.error('API Error : ', JSON.stringify(error));
            });
          
        });
      } 

      if (status == ConnectionStatus.Offline) {
        this.translate.get('CHECK_INTERNET').subscribe(value => {
          this.toastAlert(value);
        });
      }
    });
  }

  async presentAlert(message, title) {
    const alert = await this.alertCtrl.create({
      message: message,
      subHeader: title,
      buttons: ['OK']
    });
    alert.present();
  }

  async toastAlert(message) {
    let toast = this.toastController.create({
      message: message,
      duration: 3000,
      position: 'bottom'
    });
    toast.then(toast => toast.present());
  }

  back() {
    this.navCtrl.navigateBack(['/tabs/tabs/settings']);
  }

}
