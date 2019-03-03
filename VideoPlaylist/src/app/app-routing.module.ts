import { VideoDetailsComponent } from './components/video-details/video-details.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VideoListComponent } from './components/video-list/video-list.component';

const routes: Routes = [
  { path: '', redirectTo: '/videos', pathMatch: 'full' },
  {
  path: 'videos',
  component: VideoListComponent,
  children: [
    {
      path: 'videos/:id',
      component: VideoDetailsComponent,
      outlet: 'details'
    }
  ],
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
