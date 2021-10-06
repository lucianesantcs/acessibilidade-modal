import { Component } from "@angular/core";
import { ModalConfig } from "./interfaces/modal-config";

@Component({
    selector: 'app-modal',
    templateUrl: './modal.component.html',
    styleUrls: ['./modal.component.scss']
})

export class ModalComponent {
    // forma antiga: (possui as mesmas propriedades do ModalConfig)
    // public title: string = null;
    // public templateRef: TemplateRef<any>;

    //nova:
    public config!: ModalConfig;

}