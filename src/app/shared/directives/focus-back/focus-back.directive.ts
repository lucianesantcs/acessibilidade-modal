import { Directive, OnDestroy, OnInit } from "@angular/core";

@Directive({
    selector: '[appFocusBack]'
})

export class FocusBackDirective implements OnInit, OnDestroy {
    private lastFocusedElement!: Element | null;

    public ngOnInit(): void {
        this.lastFocusedElement = document.activeElement;
    }

    public ngOnDestroy(): void {
        (this.lastFocusedElement as HTMLElement)?.focus();
    }
}