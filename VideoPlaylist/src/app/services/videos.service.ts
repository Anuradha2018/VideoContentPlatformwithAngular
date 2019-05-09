import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class VideosService {
  videosUrl = "http://video.skincoachapp.com/v1/_debug/";

  constructor(private http: HttpClient) {}
  // changed the return type of fetchVideos method to Observable of type any array because the url returns an array of objects.
  fetchVideos(): Observable<any[]> {
    return <Observable<any[]>>this.http.get(this.videosUrl);
  }
}
