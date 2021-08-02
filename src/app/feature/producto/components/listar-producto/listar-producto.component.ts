import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { ProductoService } from '@producto/shared/service/producto.service';
import { Cliente } from '@producto/shared/model/cliente';

@Component({
  selector: 'app-listar-producto',
  templateUrl: './listar-producto.component.html',
  styleUrls: ['./listar-producto.component.scss']
})
export class ListarProductoComponent implements OnInit {
  public listaProductos: Observable<Cliente[]>;

  constructor(protected productoService: ProductoService) { }

  ngOnInit() {
    this.listaProductos = this.productoService.consultar();
  }

}
