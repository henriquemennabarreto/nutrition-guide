import { Component } from "@angular/core";
import { Camera, CameraResultType, CameraSource } from "@capacitor/camera";
import { PopoverController } from "@ionic/angular";
import { Store } from "@ngrx/store";
import { setProfilePicture } from "src/app/store/app.actions";

@Component({
  selector: 'app-image-options',
  templateUrl: 'image-options.component.html',
  styleUrls: ['image-options.component.scss']
})
export class ImageOptionsComponent {

  constructor(
    private popoverCtrl: PopoverController,
    private store: Store
  ) {}

  async selectOption(option: 'camera' | 'gallery' | 'delete') {
    let image;

    switch (option) {
      case 'camera':
        image = await Camera.getPhoto({
          quality: 90,
          resultType: CameraResultType.Base64,
          source: CameraSource.Camera
        });
        break;

      case 'gallery':
        image = await Camera.getPhoto({
          quality: 90,
          resultType: CameraResultType.Base64,
          source: CameraSource.Photos
        });
        break;

      case 'delete':
        this.store.dispatch(setProfilePicture({ profilePicture: null }));
        this.popoverCtrl.dismiss();
        return;

      default:
        return;
    }

    if (image && image.base64String) {
      this.store.dispatch(setProfilePicture({ profilePicture: 'data:image/jpeg;base64,' + image.base64String }));
    }

    this.popoverCtrl.dismiss();
  }
}
