import { by, element } from 'protractor';

export class ProductoPage {
    private linkCrearCliente = element(by.id('linkCrearCliente'));
    private linkListarClientes = element(by.id('linkListarCliente'));
    private linkElimibarClientes = element(by.id('linkEliminarCliente'));
    private inputNombreCliente = element(by.id('nombreCliente'));
    private inputCedulaCliente = element(by.id('cedulaCliente'));
    private inputGeneroCliente = element(by.id('generoCliente'));
    private inputFechaNacimientoCliente = element(by.id('fechaNaciemientoCliente'));
    private listaClientes = element.all(by.css('ul.productos li'));
    private mensajeToast = element(by.css('.toast-message'));

    async clickBotonCrearClientes() {
        await this.linkCrearCliente.click();
    }

    async clickBotonListarClientes() {
        await this.linkListarClientes.click();
    }

    async clickBotonEliminarClientes() {
        await this.linkElimibarClientes.click();
    }

    async ingresarNombre(nombreCliente) {
        await this.inputNombreCliente.sendKeys(nombreCliente);
    }

    async ingresarCedula(cedulaCliente) {
        await this.inputCedulaCliente.sendKeys(cedulaCliente);
    }

    async ingresarGenero(generoCliente) {
        await this.inputGeneroCliente.sendKeys(generoCliente);
    }

    async ingresarFechaNacimiento(fechaNacimientoProducto) {
        await this.inputFechaNacimientoCliente.sendKeys(fechaNacimientoProducto);
    }

    async contarProductos() {
        return this.listaClientes.count();
    }

    async obtenerMensaje() {
        return this.mensajeToast;
    }
}
