import { bootstrapApplication } from '@angular/platform-browser';
import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpClient, provideHttpClient } from '@angular/common/http';

const API_URL = 'https://leydymen-academy-backend.onrender.com/api/registrations/';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './app/app.component.html',
  styleUrl: './app/app.component.css'
})
export class AppComponent {
  private fb = inject(FormBuilder);
  private http = inject(HttpClient);

  loading = false;
  success = '';
  error = '';

  bootcamps = [
    { key: 'spring', label: 'Spring Boot • Angular • PostgreSQL', title: 'BOOTCAMP FULL STACK', img: 'assets/bootcamp-spring.jpeg' },
    { key: 'django', label: 'Django • Angular • PostgreSQL', title: 'BOOTCAMP FULL STACK', img: 'assets/bootcamp-django.jpeg' },
    { key: 'flutter', label: 'Flutter • Django • Firebase', title: 'BOOTCAMP MOBILE', img: 'assets/bootcamp-flutter.jpeg' }
  ];

  form = this.fb.group({
    full_name: ['', [Validators.required, Validators.minLength(3)]],
    phone: ['', [Validators.required, Validators.minLength(8)]],
    email: ['', [Validators.required, Validators.email]],
    city: [''],
    school_or_company: [''],
    level: ['', Validators.required],
    bootcamp: ['', Validators.required],
    programming_level: ['', Validators.required],
    has_laptop: ['', Validators.required],
    motivation: [''],
    discovery_source: [''],
    preferred_contact: ['WhatsApp', Validators.required]
  });

  selectBootcamp(key: string) {
    this.form.patchValue({ bootcamp: key });
    document.getElementById('inscription')?.scrollIntoView({ behavior: 'smooth' });
  }

  submit() {
    this.success = '';
    this.error = '';
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      this.error = 'Veuillez remplir les champs obligatoires.';
      return;
    }
    this.loading = true;
    this.http.post(API_URL, this.form.value).subscribe({
      next: () => {
        this.success = 'Pré-inscription enregistrée avec succès. LEYDYMEN Academy vous contactera bientôt.';
        this.form.reset({ preferred_contact: 'WhatsApp' });
        this.loading = false;
      },
      error: () => {
        this.error = "Impossible d'envoyer le formulaire. Vérifiez que le backend Django est lancé.";
        this.loading = false;
      }
    });
  }
}

bootstrapApplication(AppComponent, {
  providers: [provideHttpClient()]
}).catch(err => console.error(err));
