import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { IUser } from '../store/app.reducer';
import * as Actions from '../store/app.actions';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';

@Component({
  selector: 'app-perfil-usuario',
  templateUrl: 'perfil-usuario.page.html',
  styleUrls: ['perfil-usuario.page.scss']
})
export class PerfilUsuarioPage {

  public profileForm: FormGroup;
  public objetivos = [
    { label: 'Ganho de massa muscular', value: 'massGain' },
    { label: 'Emagrecimento', value: 'weightLoss' }
  ];
  public selectedObjective: any = null;

  constructor(
    private fb: FormBuilder,
    private store: Store<IUser>,
    private router: Router
  ) {
    this.profileForm = this.fb.group({
      nome: [''],
      idade: [''],
      altura: [''],
      peso: [''],
      genero: [''],
      objetivo: [false]
    });
  }
  
  onSubmit() {
    this.router.navigate(['/tabs/visualizar-resultado']);
    // const profileData = this.profileForm.value;
    // this.store.dispatch(Actions.setUser({ user: profileData }));
  }
  
  onImageChanged(imageSrc: string) {
    this.store.dispatch(Actions.setProfilePicture({ profilePicture: imageSrc }));
  }
  
  selectObjective(obj: any) {
    this.selectedObjective = obj;
    this.profileForm.controls['objetivo'].setValue(obj.value);
  }
}
