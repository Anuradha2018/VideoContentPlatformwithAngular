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
    console.log(this.objectKeys(this.videosObj));
    this.videoService.fetchVideos().subscribe((data: object[]) => {
      console.log("data from the url ---->", data);
      const initiallyFiltered = [...data].filter(
        // this stores the items which has  browseable and active true
        (item: any) => item.browseable && item.active
      );
      console.log(
        "items that are browseable and active --->",
        initiallyFiltered
      );
      this.videosObj = _groupBy(initiallyFiltered, item => item.category);
      console.log(
        "browseable and active items that are grouped by categories --->",
        this.videosObj
      );
      this.allVideos = [...data];
      console.log(this.objectKeys(this.videosObj));
    });
  }

  filterVideos(event: any) {
    console.log(event);
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
