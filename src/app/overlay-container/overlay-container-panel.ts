import { EventEmitter, TemplateRef } from '@angular/core';

export interface OverlayContainerPanel {
  templateRef: TemplateRef<unknown>;
  readonly closed: EventEmitter<void>;
}
