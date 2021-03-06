import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { VideosService } from "./../../services/videos.service";

@Component({
  selector: "app-video-details",
  templateUrl: "./video-details.component.html",
  styleUrls: ["./video-details.component.scss"]
})
export class VideoDetailsComponent implements OnInit {
  allVideos = [];
  videoId: number;
  videoDetail: any;
  videoUrl: string;

  constructor(
    public route: ActivatedRoute,
    public videoService: VideosService
  ) {}

  ngOnInit() {
    this.videoService.fetchVideos().subscribe(data => {
      // this.allVideos = this.allVideos.concat(data);
      this.allVideos = [...data];
      this.route.params.subscribe(params => {
        console.log("paramsId", params["id"]);
        this.videoId = +params["id"];
        console.log("videoId in the detail page", this.videoId);
        console.log(this.allVideos);
        if (this.allVideos.length > 0) {
          this.videoDetail = this.allVideos.find((video, index, collection) => {
            return video["id"] === this.videoId;
          });
          console.log(this.videoDetail);
          this.videoUrl = this.videoDetail.videoUrl;
        }
      });
    });
  }
}
