import { Router } from '@angular/router';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { Component, OnInit } from '@angular/core';
import { ActionSheetController, AlertController } from '@ionic/angular';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  constructor(private camera: Camera, public actionSheetController: ActionSheetController, private router: Router, public atrCtrl: AlertController) { }

  ngOnInit() {
  }
  onBack(){
    this.router.navigateByUrl('/tabs');

  }

  logout(){
    this.router.navigateByUrl('/login');

  }

  showAlert(){
    let alert = this.atrCtrl.create({
      subHeader: 'Proceed to logout!',
      buttons: [{
        text: 'Ok',
        handler: () =>{
          this.logout()
        }
      }],

    }).then(res =>{
      res.present()

    })

  }
  addIncome(){
    let alert = this.atrCtrl.create({
      header: 'Add Income',
      inputs: [
        {
          name: 'income',
          placeholder: '0',
          cssClass: 'exp-price'
        }

      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Login',
          handler: data => {
            // if (User.isValid(data.username, data.password)) {
            //   // logged in!
            // } else {
            //   // invalid login
            //   return false;
            // }
          }
        }
      ]
    })
  }
  pickImage(sourceType){
    const options: CameraOptions = {
      quality: 100,
      sourceType: sourceType,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
      }
      this.camera.getPicture(options).then((imageData) => {
        // imageData is either a base64 encoded string or a file URI
        // If it's base64 (DATA_URL):
        // let base64Image = 'data:image/jpeg;base64,' + imageData;
        }, (err) => {
        // Handle error
        });
  }
  async selectImage() {
    const actionSheet = await this.actionSheetController.create({
      header: "Select Image source",
      buttons: [{
        text: 'Load from Library',
        handler: () => {
          this.pickImage(this.camera.PictureSourceType.PHOTOLIBRARY);
        }
      },
      {
        text: 'Use Camera',
        handler: () => {
          this.pickImage(this.camera.PictureSourceType.CAMERA);
        }
      },
      {
        text: 'Cancel',
        role: 'cancel'
      }
      ]
    });
    await actionSheet.present();
  }

}
