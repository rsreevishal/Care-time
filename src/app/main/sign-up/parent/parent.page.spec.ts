import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ParentPage } from './parent.page';

describe('ParentPage', () => {
  let component: ParentPage;
  let fixture: ComponentFixture<ParentPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParentPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ParentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
