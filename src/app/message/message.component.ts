import {Component, Input, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-message',
  template: `
    <div>
<!--      <p-message severity="error" text="{{text}}" *ngIf="temErro()"></p-message>-->
    </div>
  `,
  styles: [`
    .ui-message-error{
      margin: 0;
      margin-top: 4px;
    }
  `]
})
export class MessageComponent {

  @Input() error: string;
  @Input() control: FormControl;
  @Input() text: string;

  temErro(): boolean{
    return this.control.hasError(this.error) && this.control.dirty;
  }

}
