import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackEntityLayerComponent } from './track-entity-layer.component';

describe('TrackEntityLayerComponent', () => {
  let component: TrackEntityLayerComponent;
  let fixture: ComponentFixture<TrackEntityLayerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrackEntityLayerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrackEntityLayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
