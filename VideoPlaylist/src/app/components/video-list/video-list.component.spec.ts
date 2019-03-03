import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { RouterTestingModule } from "@angular/router/testing";
import { CustomTimePipe } from "./../../pipes/custom-time.pipe";
import { HttpClientTestingModule } from "@angular/common/http/testing";

import { VideoListComponent } from "./video-list.component";

describe("VideoListComponent", () => {
  let component: VideoListComponent;
  let fixture: ComponentFixture<VideoListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [VideoListComponent, CustomTimePipe],
      imports: [RouterTestingModule, HttpClientTestingModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
