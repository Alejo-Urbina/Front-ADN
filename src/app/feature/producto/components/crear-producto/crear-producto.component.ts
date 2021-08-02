import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../../shared/service/producto.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Injectable } from "@angular/core";
import { ToastrService } from 'ngx-toastr';


@Injectable({
  providedIn: 'root'
})
@Component({
  selector: 'app-crear-producto',
  templateUrl: './crear-producto.component.html',
  styleUrls: ['./crear-producto.component.scss']
})
export class CrearProductoComponent implements OnInit {
  productoForm: FormGroup;
  
  constructor(protected productoService: ProductoService, private toast: ToastrService) { }

  ngOnInit() {
    this.construirFormularioProducto();
  }

  cerar() {    
    this.productoService.guardarCliente(this.productoForm.value).subscribe(
      data => this.showSucces(data.valueOf,'Exitoso'),
      error => this.showError('No se pudo',error.ok));  
  }

  showSucces(texto,titulo){
    this.toast.success(texto,titulo);
  }

  showError(texto,titulo){
    this.toast.error(texto,titulo);
  }

  private construirFormularioProducto() {
    this.productoForm = new FormGroup({
      nombre: new FormControl('', [Validators.required]),
      cedula: new FormControl('', [Validators.required]),
      genero: new FormControl('', [Validators.required]),
      fechaNacimiento: new FormControl('', [Validators.required])
    });
  }

}
