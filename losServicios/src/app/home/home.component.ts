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
    this.articulos.push(
    {
      titulo: 'Curso de net core',
      descripcion: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus quam reprehenderit ipsam exercitationem vitae possimus, ea alias accusamus quod omnis odio repellendus veritatis molestias optio debitis, nihil a nam nobis.',
      fecha: new Date(),
      usuario: `${this.usuarioInyectado.usuario.nombre} ${this.usuarioInyectado.usuario.apellido}`
    },
    {
      titulo: 'Curso de angular',
      descripcion: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus quam reprehenderit ipsam exercitationem vitae possimus, ea alias accusamus quod omnis odio repellendus veritatis molestias optio debitis, nihil a nam nobis.',
      fecha: new Date('04/25/2020'),
      usuario: `${this.usuarioInyectado.usuario.nombre} ${this.usuarioInyectado.usuario.apellido}`
    },
    {
      titulo: 'Curso de React',
      descripcion: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus quam reprehenderit ipsam exercitationem vitae possimus, ea alias accusamus quod omnis odio repellendus veritatis molestias optio debitis, nihil a nam nobis.',
      fecha: new Date('04/2/2020'),
      usuario: `${this.usuarioInyectado.usuario.nombre} ${this.usuarioInyectado.usuario.apellido}`
    })
  }

  irAlDetalle(articulo: Articulo)
  {
    this.articuloInyectado.articulo = articulo;
    this.Ruta.navigateByUrl('/articulo-detalle');
  }

}

