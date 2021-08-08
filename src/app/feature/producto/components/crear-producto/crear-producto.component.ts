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
      data => {this.showSucces('Exitoso'); data.valueOf},
      error => this.showError(error.error.mensaje)               
      );   
  }

  showSucces(titulo){
    this.toast.success(titulo);
  }

  showError(texto){
    this.toast.error(texto);
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
