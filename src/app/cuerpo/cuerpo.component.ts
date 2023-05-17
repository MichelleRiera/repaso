import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-cuerpo',
  templateUrl: './cuerpo.component.html',
  styleUrls: ['./cuerpo.component.scss']
})
export class CuerpoComponent {
  @Input() name="michelle";

  enviar() {
    const mensaje = `¡Hola ${this.name}! Este es un mensaje enviado desde el componente Mensaje.`;
    console.log(mensaje);
    // Aquí puedes realizar acciones adicionales con el mensaje
  }
  @Output() enviarmensaje= new EventEmitter<string>();
  enviarMensaje() {
    this.enviarmensaje.emit(this.name);
  }

}
