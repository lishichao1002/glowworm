import {Component, Input} from "@angular/core";

/**
 * @deprecated
 * use gw-connected-overlay or cdk-connected-overlay instead
 */
@Component({
    selector: 'gw-popover-container',
    styleUrls: ['./popover.component.css'],
    template: `
        <div class="modal_window mw-right mw-block" [ngStyle]="styler">
            <ng-content></ng-content>
        </div>
    `
})
export class GWPopoverContainerComponent {

    @Input() styler: any;

}