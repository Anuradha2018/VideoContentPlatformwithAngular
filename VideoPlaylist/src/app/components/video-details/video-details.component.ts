import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VideosService } from './../../services/videos.service';
import { EmbedVideoService } from 'ngx-embed-video';

@Component({
  selector: 'app-video-details',
  templateUrl: './video-details.component.html',
  styleUrls: ['./video-details.component.scss']
})
export class VideoDetailsComponent implements OnInit {
  allVideos = [];
  videoId: number;
  videoDetail = null;
  videoUrl: string;
  constructor(
    public route: ActivatedRoute,
    public videoService: VideosService,
    private embedService: EmbedVideoService
  ) {
    // console.log(this.embedService.embed(this.videoDetail.videoUrl));
   }

  ngOnInit() {
    this.videoService.fetchVideos().subscribe(data => {
      this.allVideos = this.allVideos.concat(data);

      this.route.params.subscribe(params => {
        this.videoId = +params['id'];
        if (this.allVideos.length > 0) {
          this.videoDetail = this.allVideos[this.videoId];
          this.videoUrl = this.videoDetail.videoUrl;
        }
      });
    });
  }

}
