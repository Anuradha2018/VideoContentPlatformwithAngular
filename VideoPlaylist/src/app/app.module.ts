import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { VideoListComponent } from './components/video-list/video-list.component';
import { VideoDetailsComponent } from './components/video-details/video-details.component';
import { AppRoutingModule } from './app-routing.module';
import { VideosService } from './services/videos.service';
import { CustomTimePipe } from './pipes/custom-time.pipe';
import { RouterModule, Routes } from '@angular/router';
import { EmbedVideo } from 'ngx-embed-video';
 
@NgModule({
  declarations: [
    AppComponent,
    VideoListComponent,
    VideoDetailsComponent,
    CustomTimePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    EmbedVideo.forRoot()
  ],
  providers: [VideosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
