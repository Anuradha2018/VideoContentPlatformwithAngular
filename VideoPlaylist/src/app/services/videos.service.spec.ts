import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing'
import { VideosService } from './videos.service';

describe('VideosService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule],
    providers: [VideosService]
  }));

  it('should be created', () => {
    const service: VideosService = TestBed.get(VideosService);
    expect(service).toBeTruthy();
  });
});
