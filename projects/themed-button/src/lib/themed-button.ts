import { Component, HostBinding, Input } from "@angular/core";
import { ButtonType } from "./themed-button.enum";

@Component({
    selector: '[themed-button]',
    templateUrl: './themed-button.html',
    styleUrls: ['./themed-button.scss'],
    standalone: true
})

export class ThemedButton {
    @Input() theme: ButtonType = ButtonType.implementation;

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

    @HostBinding('style.--color') get color(){
        return ThemedButton.colorMapping[this.theme];
    }
    @HostBinding('style.--click-color') get clickColor(){
        return ThemedButton.clickColorMapping[this.theme];
    }
}