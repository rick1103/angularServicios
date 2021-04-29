import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
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
  esNuevo: boolean = true;
  titulo: string = '';

  constructor(private articuloInyectado: ArticulosService, private fbGenerador: FormBuilder, private RutaActiva: ActivatedRoute) { }

  ngOnInit() {

    this.esNuevo = JSON.parse(this.RutaActiva.snapshot.params.esNuevo);
    this.titulo = this.esNuevo ? 'Agregar' : 'Editar';
    
    this.formularioArticulo = this.fbGenerador.group({
      title:['', Validators.required],
      body:['',Validators.required],
      userId:['',Validators.required]
    })

    if(!this.esNuevo)
    {
      this.articulo = this.articuloInyectado.articulo;
      this.formularioArticulo.setValue({
        title: this.articulo.title,
        body: this.articulo.body,
        userId: this.articulo.userId
      })
    }

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

  editar()
  {
    this.articulo.title = this.formularioArticulo.value.title;
    this.articulo.body = this.formularioArticulo.value.body;
    this.articulo.userId = this.formularioArticulo.value.userId;
    this.articuloInyectado.actualizarArticulo(this.articulo).subscribe((articuloRecibido)=>{
      console.log(articuloRecibido);
      console.log('Se edito correctamente');
    })
  }

}
