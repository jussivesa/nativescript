import { Component } from "@angular/core";

@Component({
    selector: "my-app",
    template: `
    <ActionBar title="My Apple app" class="action-bar"></ActionBar>
    <Image src="~/images/apple.jpg"></Image>
  `,
    styles: [`
    @keyframes spin {
      from { transform: rotate(0); } to { transform: rotate(360); }
    }
    Image {
      animation-name: spin; animation-duration: 59s;
      animation-iteration-count: infinite;
      animation-timing-function: linear;
    }
  `]
})
export class AppComponent {
    constructor() {
        console.dump("Hello World");
    }
}