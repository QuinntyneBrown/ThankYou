import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Interaction } from '@api';

@Component({
  selector: 'app-interaction-card',
  templateUrl: './interaction-card.component.html',
  styleUrls: ['./interaction-card.component.scss']
})
export class InteractionCardComponent {
  @Input() interaction: Interaction;

  @Output() deleted: EventEmitter<any> = new EventEmitter();

}
