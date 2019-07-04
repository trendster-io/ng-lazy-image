import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  onImgWillLoad(index: number) {
    console.log(`Image ${index} will load`);
  }
  onImgLoad(index: number) {
    console.log(`Image ${index} was loaded`);
  }
  onImgError(index: number) {
    console.log(`Image ${index} failed to load`);
  }
}
