import {NgModule} from "@angular/core";
import {GwTabsComponent} from "./tabs.component";
import {GwTabComponent} from "./tab.component";
import {CommonModule} from "@angular/common";

@NgModule({
    imports: [
        CommonModule
        // DragulaModule
    ],
    declarations: [
        GwTabComponent,
        GwTabsComponent
    ],
    exports: [
        GwTabsComponent,
        GwTabComponent
    ]
})
export class GwTabsModule {
}