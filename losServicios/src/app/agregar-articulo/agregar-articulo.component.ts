import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Articulo } from '../models/articulo';
import { User } from '../models/user';
import { ArticulosService } from '../services/articulos.service';

@Component({
  selector: 'app-agregar-articulo',
  templateUrl: './agregar-articulo.component.html',
  styleUrls: ['./agregar-articulo.component.scss']
})
export class AgregarArticuloComponent implements OnInit {

  usuarios: Array<User> = new Array<User>();
  formularioArticulo: FormGroup;
  articulo: Articulo = new Articulo();

  constructor(private articuloInyectado: ArticulosService, private fbGenerador: FormBuilder) { }

  ngOnInit() {

    this.formularioArticulo = this.fbGenerador.group({
      title:['', Validators.required],
      body:['',Validators.required],
      userId:['',Validators.required]
    })

    this.articuloInyectado.leerTodosLosUsuarios().subscribe((usuariosRecibidos)=>{
      this.usuarios = usuariosRecibidos;
    })
  }

  agregar()
  {
    this.articulo = this.formularioArticulo.value as Articulo;
    this.articuloInyectado.guardarArticulo(this.articulo).subscribe((articuloRecibido)=>{
      console.log(articuloRecibido);
      console.log('Felicidades a registrado el primer articulo');
      this.formularioArticulo.reset();
    })
  }

}
