import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilMainComponent } from './profil-main.component';

describe('ProfilMainComponent', () => {
  let component: ProfilMainComponent;
  let fixture: ComponentFixture<ProfilMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfilMainComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfilMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
