import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-scope',
  templateUrl: './scope.page.html',
  styleUrls: ['./scope.page.scss'],
})
export class ScopePage implements OnInit {

  type:any;
  region: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private nativeStorage: NativeStorage,
    public navCtrl: NavController
  ) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(param => { 
      this.type = param.get('type');
    });
  }

  newSurvey() {
    this.navCtrl.navigateForward(['/survey/'+this.type]);
  }

  newIssue() {
    this.nativeStorage.remove('id_scope');
    this.nativeStorage.remove('id_partner');
    this.nativeStorage.remove('id_appearance');
    this.nativeStorage.remove('id_function');
    this.nativeStorage.remove('survey_unique_id');

    this.navCtrl.navigateForward(['/issue/'+this.type]);
  }

  backToDetails() {
    if(this.type == 'town') {
      this.navCtrl.navigateBack(['/town']);
    } else {
      this.nativeStorage.getItem('region').then(val => {
        this.navCtrl.navigateBack(['/region4/'+val]);
      });
    }
  }
}
