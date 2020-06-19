import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KMForumComponent } from './km-forum.component';

describe('KMForumComponent', () => {
  let component: KMForumComponent;
  let fixture: ComponentFixture<KMForumComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KMForumComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KMForumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
