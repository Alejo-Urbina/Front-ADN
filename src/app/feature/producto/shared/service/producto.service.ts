import { Injectable } from '@angular/core';
import { HttpService } from '@core-service/http.service';
import { environment } from 'src/environments/environment';
import { Cliente } from '../model/cliente';


@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  constructor(protected http: HttpService) {
  }

  public consultar() {
    return this.http.doGet<Cliente[]>(`${environment.endpoint}/clientes`, this.http.optsName('consultar productos'));
  }

  public eliminar(id: number) {
    return this.http.doDelete<boolean>(`${environment.endpoint}/clientes/${id}`,
                                                 this.http.optsName('eliminar clientes'));
  }

  public guardarCliente(cliente: Cliente) {
    return this.http.doPost<Cliente, boolean>(`${environment.endpoint}/clientes`, cliente, this.http.optsName('Crear Cliente'));    
  }

}
