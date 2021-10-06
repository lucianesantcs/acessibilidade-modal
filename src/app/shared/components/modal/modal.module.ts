import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ModalComponent } from "./modal.component";
import { ModalService } from "./services/modal.service";

@NgModule({
    declarations: [ModalComponent],
    imports: [CommonModule],
    exports: [ModalComponent],
    providers: [ModalService]
})

export class ModalModule {}