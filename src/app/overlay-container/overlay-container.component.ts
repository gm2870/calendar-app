import { Component, EventEmitter, Input, Output } from '@angular/core';
import {
  OverlayModule,
  CdkOverlayOrigin,
  FlexibleConnectedPositionStrategyOrigin,
  ConnectedPosition,
} from '@angular/cdk/overlay';

@Component({
  selector: 'app-overlay-container',
  templateUrl: './overlay-container.component.html',
  styleUrls: ['./overlay-container.component.scss'],
  standalone: true,
  imports: [OverlayModule],
})
export class OverlayContainerComponent {
  @Input() isOpen = false;
  @Input() trigger!: CdkOverlayOrigin | FlexibleConnectedPositionStrategyOrigin;
  @Input() positions: ConnectedPosition[] = [
    {
      originX: 'start',
      originY: 'bottom',
      overlayX: 'center',
      overlayY: 'top',
      offsetY: 0,
    },
  ];
  @Output() shouldClose = new EventEmitter();
}
