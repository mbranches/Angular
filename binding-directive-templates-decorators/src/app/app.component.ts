import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'binding-directive-templates-decorators';
  inputText: string = 'texto inicial'
  inputType: string = 'text';
  isDisabled: boolean = false;

  enableInput(): void {
    this.isDisabled = false;
  }

  disableInput(): void {
    this.isDisabled = true;
  }

  setInputTypePassword(): void {
    this.inputType = 'password';
  }

  setInputTypeText(): void {
    this.inputType = 'text';
  }
}