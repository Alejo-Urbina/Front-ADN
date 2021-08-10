import { by, element } from 'protractor';

export class ProductoPage {
    private linkCrearCliente = element(by.id('linkCrearProducto'));
    private linkListarClientes = element(by.id('linkListarProducto'));
    private linkEliminarClientes = element(by.id('linkBorrarProducto'));
    private crearCliente = element(by.id('Crear'));
    private eliminarCliente = element(by.id('Eliminar'));
    private inputNombreCliente = element(by.id('nombreCliente'));
    private inputCedulaCliente = element(by.id('cedulaCliente'));
    private inputGeneroCliente = element(by.id('generoCliente'));    
    private inputFechaNacimientoCliente = element(by.id('fechaNacimiento'));
    private inputIdCliente = element(by.id('idCliente'));
    private listaClientes = element.all(by.css('ul.productos li'));
    private mensaje = element(by.id("estado"));

    clickBotonComponenteCrearClientes() {
        return this.linkCrearCliente.click();
    }

    clickBotonComponenteListarClientes() {
        return this.linkListarClientes.click();
    }

    clickBotonComponenteEliminarClientes() {
        return this.linkEliminarClientes.click();
    }

    clickBotonCrearClientes() {
        return this.crearCliente.click();
    }

    clickBotonEliminarClientes() {
        return this.eliminarCliente.click();
    }

    ingresarNombre(nombreCliente) {
        return this.inputNombreCliente.sendKeys(nombreCliente);
    }

    ingresarCedula(cedulaCliente) {
        return this.inputCedulaCliente.sendKeys(cedulaCliente);
    }

    ingresarGenero(generoCliente) {
        return this.inputGeneroCliente.sendKeys(generoCliente);
    }

    ingresarFechaNacimiento(fechaNacimientoProducto) {
        return this.inputFechaNacimientoCliente.sendKeys(fechaNacimientoProducto);
    }

    ingresarId(idCliente){
        return this.inputIdCliente.sendKeys(idCliente);
    }

    contarProductos() {
        return this.listaClientes.count();
    }

    obtenerMensaje() {
        return this.mensaje.getText();
    }
}
