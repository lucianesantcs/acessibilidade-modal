import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { fade } from './shared/animations/fade';
import { ModalRef } from './shared/components/modal/models/modal-ref';
import { ModalService } from './shared/components/modal/services/modal.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [fade]
})
export class AppComponent implements OnInit{
  @ViewChild('modal') public modalTemplateRef!: TemplateRef<any>;
  title = 'acessibilidade-modal';
  public info = false;

  public modalRef!: ModalRef;
  public firstName = 'Name here';

  constructor(private modalService: ModalService, private formBuilder: FormBuilder) {}
  public form!: FormGroup;

  public show(): void {
    this.modalRef = this.modalService.open({
      templateRef: this.modalTemplateRef,
      title: 'User Details'
    })
  }

  public submit(): void {
    if(this.form.invalid) return;
    this.modalRef.close();
  }

  public ngOnInit(): void {
    this.form = this.formBuilder.group({
      firstName: ['', Validators.required],
      surname: ['', Validators.required],
      age: ['', Validators.required],
      info: [false]
    });
  }
}
