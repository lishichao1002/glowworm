import {Component, OnInit} from "@angular/core";
import {GwConfirmService} from "../../../src/confirm/confirm.service";

@Component({
    selector: 'gwconfirm-demox',
    template: `
        <h2>this is a component content</h2>
    `
})
export class GwconfirmDemoXComponent {

}

@Component({
    selector: 'gwconfirm-demo',
    template: `
        <p>
            <button gw-confirm
                    [title]="'hello world'"
                    [content]="'this is a string content'"
                    (onConfirm)="ok()"
                    (onCancel)="cancel()">
                confirm with string content
            </button>
        </p>

        <p>
            <ng-template #tpl>
                <h1>this is a template content</h1>
            </ng-template>
            <button gw-confirm
                    [title]="'hello world'"
                    [content]="tpl"
                    (onConfirm)="ok()"
                    (onCancel)="cancel()">
                confirm with template content
            </button>
        </p>

        <p>
            <button gw-confirm
                    [title]="'hello world'"
                    [content]="component"
                    (onConfirm)="ok()"
                    (onCancel)="cancel()">
                confirm with component content
            </button>
        </p>

        <p>
            <button (click)="openConfirm()">confirm with GwConfirmService</button>
        </p>
    `
})
export class GwconfirmDemoComponent implements OnInit {

    component = GwconfirmDemoXComponent;

    constructor(private service: GwConfirmService) {
    }

    ngOnInit() {
        // alert('init ok');
    }

    ok() {
        console.log('ok')
    }

    cancel() {
        console.log('cancel')
    }

    openConfirm() {
        this.service.show({
            title: 'title with GwConfirmService',
            content: 'content with GwConfirmService',
            onConfirm: () => {
                console.log('confirm');
            },
            onCancel: () => {
                console.log('cancel');
            }
        });
    }
}
