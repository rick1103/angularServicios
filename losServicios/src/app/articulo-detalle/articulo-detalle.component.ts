import { Component, OnInit } from '@angular/core';
import { Articulo } from '../models/articulo';
import { ArticulosService } from '../services/articulos.service';

@Component({
  selector: 'app-articulo-detalle',
  templateUrl: './articulo-detalle.component.html',
  styleUrls: ['./articulo-detalle.component.scss']
})
export class ArticuloDetalleComponent implements OnInit {

  articulo: Articulo = new Articulo();

  constructor(private articuloInyectado: ArticulosService) { 
    this.articulo = this.articuloInyectado.articulo;
  }

  ngOnInit() {
  }

}
