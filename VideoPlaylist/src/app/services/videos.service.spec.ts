import { TestBed, inject } from "@angular/core/testing";
import { HttpClientTestingModule } from "@angular/common/http/testing";

import { VideosService } from "./videos.service";

describe("VideosService", () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VideosService],
      imports: [HttpClientTestingModule],
    });
  });

  it("should be created", inject([VideosService], (service: VideosService) => {
    expect(service).toBeTruthy();
  }));
});
