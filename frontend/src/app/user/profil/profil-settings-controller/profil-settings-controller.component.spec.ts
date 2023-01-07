import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilSettingsControllerComponent } from './profil-settings-controller.component';

describe('ProfilSettingsControllerComponent', () => {
  let component: ProfilSettingsControllerComponent;
  let fixture: ComponentFixture<ProfilSettingsControllerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfilSettingsControllerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfilSettingsControllerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
