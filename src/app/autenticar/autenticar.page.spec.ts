import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { AutenticarPage } from './autenticar.page';

describe('AutenticarPage', () => {
  let component: AutenticarPage;
  let fixture: ComponentFixture<AutenticarPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AutenticarPage],
      imports: [IonicModule.forRoot(), ExploreContainerComponentModule]
    }).compileComponents();

    fixture = TestBed.createComponent(AutenticarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
