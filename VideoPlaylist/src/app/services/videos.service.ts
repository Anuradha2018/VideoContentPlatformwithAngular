import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VideosService {
  videosUrl = 'http://video.skincoachapp.com/v1/_debug/';

  constructor(private http: HttpClient) {
  }
  fetchVideos () {
    return this.http.get(this.videosUrl);
  }
}
