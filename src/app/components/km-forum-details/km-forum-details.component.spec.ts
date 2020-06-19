import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KMForumDetailsComponent } from './km-forum-details.component';

describe('KMForumDetailsComponent', () => {
  let component: KMForumDetailsComponent;
  let fixture: ComponentFixture<KMForumDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KMForumDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KMForumDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
