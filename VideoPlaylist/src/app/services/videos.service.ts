import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class VideosService {
  videosUrl = "http://video.skincoachapp.com/v1/_debug/";

  constructor(private http: HttpClient) {}
  fetchVideos(): Observable<any[]> {
    return <Observable<any[]>>this.http.get(this.videosUrl);
  }
}
