import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { VisualizarResultadoPage } from './visualizar-resultado.page';

describe('VisualizarResultadoPage', () => {
  let component: VisualizarResultadoPage;
  let fixture: ComponentFixture<VisualizarResultadoPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VisualizarResultadoPage],
      imports: [IonicModule.forRoot(), ExploreContainerComponentModule]
    }).compileComponents();

    fixture = TestBed.createComponent(VisualizarResultadoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
