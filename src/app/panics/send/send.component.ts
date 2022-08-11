import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'app-send',
  templateUrl: './send.component.html',
  styles: [
  ]
})
export class SendComponent {
  public readonly panicForm: FormGroup;

  public constructor(private readonly fb: FormBuilder) {
    this.panicForm = this.fb.group({
      latitude: [null, [Validators.required]],
      longitude: [null, [Validators.required]],
      panic_type: [],
      details: [],
    });
  }

  public sendPanic(): void {

  }
}
