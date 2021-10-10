import { ComponentFactory, ComponentFactoryResolver, ComponentRef, Injectable, Injector, TemplateRef } from "@angular/core";
import { BodyInJectorService } from "src/app/shared/services/body-injector";
import { ModalConfig } from "../interfaces/modal-config";
import { ModalComponent } from "../modal.component";
import { ModalRef } from "../models/modal-ref";

@Injectable()
export class ModalService {
    private componentFactory: ComponentFactory<ModalComponent>

    constructor(private injector: Injector, componentFactoryResolver: ComponentFactoryResolver, private bodyInJectorService: BodyInJectorService) {
        this.componentFactory = componentFactoryResolver.resolveComponentFactory(ModalComponent);
    }

    public open(config: ModalConfig): ModalRef {
        const componentRef = this.createComponentRef();
        componentRef.instance.config = config;
        this.bodyInJectorService.stackBeforeAppRoot(componentRef);
        const modalRef = new ModalRef(componentRef);
        componentRef.instance.modalRef = modalRef;
        return modalRef;
    }

    private createComponentRef(): ComponentRef<ModalComponent> {
        return this.componentFactory.create(this.injector);
    }
}