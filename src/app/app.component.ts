import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent  {
  title = 'my-app';
  imageSrc: string = 'https://global.discourse-cdn.com/turtlehead/optimized/2X/c/c830d1dee245de3c851f0f88b6c57c83c69f3ace_2_250x250.png';
 

  onImageSelect(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    
    if (inputElement.files && inputElement.files.length > 0) {
      const file = inputElement.files[0];
  
      const reader = new FileReader();
      reader.onload = () => {
        this.imageSrc = reader.result as string;
  
        if (typeof reader.result === 'string') {
          console.log('Base64 Image Data:', reader.result);
        }
      };
      reader.readAsDataURL(file);
    }
  }


}
