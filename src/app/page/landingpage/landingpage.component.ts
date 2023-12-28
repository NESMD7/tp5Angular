import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ServicesService } from 'src/app/services.service';

@Component({
  selector: 'app-landingpage',
  templateUrl: './landingpage.component.html',
  styleUrls: ['./landingpage.component.css']
})
export class LandingpageComponent { selectedResponsable: string = '';
responsable: string[] = ["ahmed", "ali", "salim"];
action: any[] = [];
addForm!: FormGroup;
formValid = false;

constructor(private build: FormBuilder, public actionService: ServicesService) { }

ngOnInit(): void {
  this.addForm = this.build.group({
    nom: ['', [Validators.required]],
    objectif: ['', [Validators.required]],
    date: [null, [Validators.required]],
    nombre: [null, [Validators.required]],
    responsable: [null, [Validators.required]],
  });

  // Subscribe to changes in the form's validity
  this.addForm.statusChanges.subscribe(status => {
    this.formValid = status === 'VALID';
  });
}

AddAction() {
  if (this.addForm.valid) {
    const formData = {
      nom: this.addForm.get('nom')?.value,
      objectif: this.addForm.get('objectif')?.value,
      date: this.addForm.get('date')?.value,
      nombre: this.addForm.get('nombre')?.value,
      responsable: this.addForm.get('responsable')?.value,
    };

    this.actionService.addAction(formData);
    console.log('Action added:', formData);

    // Reset the form
    this.addForm.reset();
  } else {
    console.log('Form is not valid');
  }
}
}
