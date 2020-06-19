import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KMForumItemComponent } from './km-forum-item.component';

describe('KMForumItemComponent', () => {
  let component: KMForumItemComponent;
  let fixture: ComponentFixture<KMForumItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KMForumItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KMForumItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
