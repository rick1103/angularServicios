import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Articulo } from '../models/articulo';
import { ArticulosService } from '../services/articulos.service';
import { UsuarioService } from '../services/usuario.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  
  articulos: Array<Articulo> =new Array<Articulo>();

  constructor(private usuarioInyectado: UsuarioService, private articuloInyectado: ArticulosService, private Ruta: Router) { }
  
  ngOnInit() {
    this.articuloInyectado.leerNoticias().subscribe((articulosDesdeApi)=>{
      this.articulos = articulosDesdeApi;
    });

    let articuloEnviar: Articulo = new Articulo();
    articuloEnviar.body = 'Este es el cuerpo del articulo';
    articuloEnviar.title = 'Ese es de prueba';
    articuloEnviar.userId = 4;
    this.articuloInyectado.guardarArticulo(articuloEnviar).subscribe((articuloCreado)=>{
      this.articulos.push(articuloCreado);
    })
  }

  irAlDetalle(articulo: Articulo)
  {
    this.articuloInyectado.articulo = articulo;
    this.Ruta.navigateByUrl('/articulo-detalle');
  }

  borrar(id: number)
  {
    this.articuloInyectado.borrarArticulo(id).subscribe((datos)=>{
      console.log(datos)
      console.log('Eliminado correctamente')
    })
  }

  actualizar(articulo: Articulo)
  {
    this.articuloInyectado.articulo = articulo;
    this.Ruta.navigateByUrl('agregar-articulo/false');
  }

}

