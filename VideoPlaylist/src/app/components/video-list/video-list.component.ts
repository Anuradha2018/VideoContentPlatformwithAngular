import { Component, OnInit } from "@angular/core";
import { VideosService } from "./../../services/videos.service";

@Component({
  selector: "app-video-list",
  templateUrl: "./video-list.component.html",
  styleUrls: ["./video-list.component.scss"],
})
export class VideoListComponent implements OnInit {
  videos = [];
  allVideos = [];

  constructor(private videoService: VideosService) {}

  ngOnInit() {
    this.videoService.fetchVideos().subscribe(data => {
      this.videos = this.videos.concat(data);
      this.allVideos = this.videos;
    });
  }

  filterVideos(event: any) {
    let searchTerm = "";
    searchTerm += event.target.value;
    const filtered = this.videos.filter(video => {
      const test = new RegExp(searchTerm, "gi");
      return video.title.match(test);
    });
    if (searchTerm !== "") {
      return (this.videos = filtered);
    }
    this.videos = this.allVideos;
  }
}
