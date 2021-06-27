import { LightningElement } from 'lwc';
export default class App extends LightningElement {
   name = 'Electra X4';
   description = 'A sweet bike built for comfort.';
   category = 'Mountain';
   material = 'Steel';
   price = '$2,700';
   pictureUrl = 'https://photos.app.goo.gl/tVjUiK4WMrJbZU6r8';
   ready = false;
   connectedCallback() {
       setTimeout(() => {
           this.ready = true;
       }, 3000);
   }
}