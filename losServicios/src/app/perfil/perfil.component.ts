import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../services/usuario.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss']
})
export class PerfilComponent implements OnInit {

  constructor(private usuarioInyectado: UsuarioService) { }

  ngOnInit() {
  }
  cambiarNombre(){
    this.usuarioInyectado.usuario.nombre= 'José';
  }

}
