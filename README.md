# VideoContentPlatformwithAngular
Video Content Platform for Web with Angular 6
Steps to run and relevant design Consideration

As said I have tried the task with Angular
The Application code has two components : 1. Video-list: displays the list
					         2. Video-detail: displays the details of each video
Here are the steps to run the program: 
1.	Down the project from the repository,
2.	Open the project on command-line : Run npm install,
3.	Run ng serve,
4.	The project gets loaded on localhost:4200.
I addressed this requirements of the task in Angular:
Video Library List
- No videos with `active` set to `false` should be shown:<b> implemented </b>
- The list must be searchable (or filtered in-place) by simple plain text entry and match text at minimum in the video `title`. : <b>implemented</b>
- Videos in the list must at minimum display the thumbnail, title and running time. But feel free to be creative: <b>implemented</b>
  
  
Video Detail
- The detail page for a video should show the video’s title and description. : <b>implemented</b>
- A video player should be included to play the video. `react-hls` or `react-player` (or any working HLS implementation of your choice):  <b>Implemented with Videogular2</b>

Design 
- The user experience does not need to be an impressive visual one, but we should be able to navigate the application effectively: <b>It’s not an impressive UI, I can make it with bootstrap which I wanted but it was not the main focus I did not invest much time.</b>
  
  
Other important information:
- Properties in the JSON beginning with `base` may be disregarded.
- Videos are supposed to be in Spanish. : <b>Taken into consideration and disregarded.</b>
Things we love to see:
- Commit history: <b>considered &implemented</b>
- Tests: <b>implemented</b>
- README with instructions on how to run the application and explain any relevant design considerations.  : <b>considered and done</b>
