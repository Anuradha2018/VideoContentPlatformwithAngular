import { Component, OnInit } from "@angular/core";
import { VideosService } from "./../../services/videos.service";

@Component({
  selector: "app-video-list",
  templateUrl: "./video-list.component.html",
  styleUrls: ["./video-list.component.scss"]
})
export class VideoListComponent implements OnInit {
  videos = [];
  allVideos = [];

  constructor(private videoService: VideosService) {}

  ngOnInit() {
    this.videoService.fetchVideos().subscribe((data: object[]) => {
      console.log("data ", data);
      this.videos = [...data].filter(
        (item: any) => item.browseable && item.active
      );
      this.allVideos = [...data];
    });
  }

  filterVideos(event: any) {
    let searchTerm = event.target.value + "";

    if (searchTerm === "") {
      this.videos = this.allVideos.filter(
        (item: any) => item.browseable && item.active
      );
      return;
    }

    this.videos = this.allVideos
      .filter((item: any) => item.active)
      .filter((item: any) => item.title.includes(searchTerm));

    console.log("searchTerm", [...this.videos]);
    console.log("this.allVideos ", this.allVideos);
  }
}
