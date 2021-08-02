import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../../shared/service/producto.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { Cliente } from '@producto/shared/model/cliente';
import { Injectable } from "@angular/core";
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})

@Component({
  selector: 'app-borrar-producto',
  templateUrl: './borrar-producto.component.html',
  styleUrls: ['./borrar-producto.component.scss']
})
export class BorrarProductoComponent implements OnInit {

  productForm: FormGroup;
  public listaProductos: Observable<Cliente[]>;

  constructor(protected productoService: ProductoService, private toast: ToastrService) { }

  ngOnInit() {
    this.construirFormularioProducto();
    this.listaProductos = this.productoService.consultar();
  }

  salida() {   
      this.productoService.eliminar(this.productForm.value.id).subscribe(
        data => this.showSucces(data,'Exitoso'),
        error => this.showError('No se pudo',error.ok));     
  }

  showSucces(texto,titulo){
    this.toast.success(texto,titulo);
  }

  showError(texto,titulo){
    this.toast.error(texto,titulo);
  }

  private construirFormularioProducto() {
    this.productForm = new FormGroup({
      id: new FormControl('', [Validators.required]),});
  }

}
