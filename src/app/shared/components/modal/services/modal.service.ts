import { ComponentFactory, ComponentFactoryResolver, ComponentRef, Injectable, Injector, TemplateRef } from "@angular/core";
import { BodyInJectorService } from "src/app/shared/services/body-injector";
import { ModalConfig } from "../interfaces/modal-config";
import { ModalComponent } from "../modal.component";

@Injectable()
export class ModalService {
    private componentFactory: ComponentFactory<ModalComponent>

    constructor(private injector: Injector, componentFactoryResolver: ComponentFactoryResolver, private bodyInJectorService: BodyInJectorService) {
        this.componentFactory = componentFactoryResolver.resolveComponentFactory(ModalComponent);
    }

    public open(config: ModalConfig): ModalRef {
        const componentRef = this.createComponentRef();
        // const componentRef = this.componentFactory.create(this.injector); // agora em this.createComponentRef()
        componentRef.instance.config = config;
        console.log('open')
        this.bodyInJectorService.stackBeforeAppRoot(componentRef);
        return new ModalRef(componentRef);
    }

    private createComponentRef(): ComponentRef<ModalComponent> {
        return this.componentFactory.create(this.injector);
    }
}

export class ModalRef {
    constructor(private componentRef: ComponentRef<ModalComponent>) {}

    public close(): void {
        console.log('closed');
        this.componentRef.destroy();
    }
}