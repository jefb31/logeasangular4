import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JournaldevComponent } from './journaldev.component';

describe('JournaldevComponent', () => {
  let component: JournaldevComponent;
  let fixture: ComponentFixture<JournaldevComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JournaldevComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JournaldevComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
