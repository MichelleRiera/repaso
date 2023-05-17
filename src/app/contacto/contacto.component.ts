import { Component } from '@angular/core';
//import { contacto } from 'src/domain/contacto';
import { contacto } from './contacto';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.scss']
})
export class ContactoComponent {
  contacto = new contacto();

  guardar2() {
    console.log('hola ups', this.contacto.nombre);
  
    this.contacto.c = this.contacto.cedula + this.contacto.nombre;
  
    console.log('c:', this.contacto.c);
  }
  
 

}
