import { Component, HostBinding, Input } from "@angular/core";
import { ButtonType } from "./themed-button.enum";

@Component({
    selector: '[themed-button]',
    templateUrl: './themed-button.html',
    styleUrls: ['./themed-button.scss'],
    standalone: true
})

export class ThemedButton {
    @Input() type: ButtonType = ButtonType.implementation;

    static colorMapping: Record<ButtonType, string> = {
        [ButtonType.implementation]: "rgb(0,45,230)",
        [ButtonType.warning]: "rgb(230, 45, 0)",
        [ButtonType.success]: "rgb(90, 200, 0)"
    };
    static clickColorMapping: Record<ButtonType, string> = {
        [ButtonType.implementation]: "rgb(180, 215, 255)",
        [ButtonType.warning]: "rgb(255, 209, 209)",
        [ButtonType.success]: "rgb(209, 255, 209)"
    };

    @HostBinding('style.--color') color = ThemedButton.colorMapping[this.type];
    @HostBinding('style.--click-color') clickColor = ThemedButton.clickColorMapping[this.type];
}