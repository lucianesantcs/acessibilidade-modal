import { Injectable, TemplateRef } from "@angular/core";

export interface ModalConfig {
    templateRef: TemplateRef<any>,
    title: string
}

export class ModalRef {
    public close(): void {
        console.log('closed')
    }
}

@Injectable()
export class ModalService {

    public open(config: ModalConfig): ModalRef {
        console.log('open')
        return new ModalRef();
    }
}