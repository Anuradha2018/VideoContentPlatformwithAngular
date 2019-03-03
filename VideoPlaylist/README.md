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
- No videos with `active` set to `false` should be shown: implemented
- The list must be searchable (or filtered in-place) by simple plain text entry and match text at minimum in the video `title`. : implemented
- Videos in the list must at minimum display the thumbnail, title and running time. But feel free to be creative: implemented
Video Detail
- The detail page for a video should show the video’s title and description. : implemented
- A video player should be included to play the video. `react-hls` or `react-player` (or any working HLS implementation of your choice):  Implemented with Videogular2

Design 
- The user experience does not need to be an impressive visual one, but we should be able to navigate the application effectively: It’s not an impressive UI, I can make it with bootstrap which I wanted but it was not the main focus I did not invest much time.
Other important information:
- Properties in the JSON beginning with `base` may be disregarded.
- Videos are supposed to be in Spanish. : Taken into consideration.
Things we love to see:
- Commit history: considered &implemented
- Tests: implemented
- README with instructions on how to run the application and explain any relevant design considerations.  : considered and done






# VideoPlaylist

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.2.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
