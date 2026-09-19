import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { COMPANY_DATA } from '../../data/company.data';

@Component({
  selector: 'app-contact-modal',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './contact-modal.component.html',
  styleUrls: ['./contact-modal.component.scss']
})
export class ContactModalComponent {
  @Input() isOpen = false;
  @Input() selectedServiceTitle = '';
  @Output() closeModal = new EventEmitter<void>();

  companyData = COMPANY_DATA;
  contactForm: FormGroup;
  isSubmitted = false;
  submitSuccess = false;

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      company: [''],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern(/^[0-9+()\s-]{7,20}$/)]],
      service: [''],
      message: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  ngOnChanges() {
    if (this.selectedServiceTitle) {
      this.contactForm.patchValue({ service: this.selectedServiceTitle });
    }
  }

  onClose() {
    this.closeModal.emit();
  }

  onSubmit() {
    this.isSubmitted = true;
    if (this.contactForm.valid) {
      this.submitSuccess = true;
      setTimeout(() => {
        this.submitSuccess = false;
        this.isSubmitted = false;
        this.contactForm.reset();
        this.closeModal.emit();
      }, 2500);
    }
  }
}
