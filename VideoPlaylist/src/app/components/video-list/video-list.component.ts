import { Component, OnInit } from "@angular/core";
import { VideosService } from "./../../services/videos.service";
import _groupBy from "lodash-es/groupBy";

@Component({
  selector: "app-video-list",
  templateUrl: "./video-list.component.html",
  styleUrls: ["./video-list.component.scss"]
})
export class VideoListComponent implements OnInit {
  videos = [];
  allVideos = [];
  videosObj = {};

  objectKeys = Object.keys;
  constructor(private videoService: VideosService) {}

  ngOnInit() {
    this.videoService.fetchVideos().subscribe((data: object[]) => {
      console.log("data ", data);
      const initiallyFiltered = [...data].filter(
        (item: any) => item.browseable && item.active
      );
      this.videosObj = _groupBy(initiallyFiltered, item => item.category);

      this.allVideos = [...data];
    });
  }

  filterVideos(event: any) {
    let searchTerm = event.target.value + "";
    let videos = [];

    if (searchTerm === "") {
      videos = this.allVideos.filter(
        (item: any) => item.browseable && item.active
      );
    } else {
      videos = this.allVideos
        .filter((item: any) => item.active)
        .filter((item: any) => item.title.includes(searchTerm));
    }

    this.videosObj = _groupBy(videos, item => item.category);
  }
}
