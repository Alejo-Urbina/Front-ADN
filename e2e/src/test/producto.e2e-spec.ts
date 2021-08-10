
import { NavbarPage } from '../page/navbar/navbar.po';
import { AppPage } from '../app.po';
import { ProductoPage } from '../page/producto/producto.po';
import { browser, logging } from 'protractor';

describe('Discoteca Clientes', () => {
    let page: AppPage;
    let navBar: NavbarPage;
    let producto: ProductoPage;

    beforeEach(() => {
        page = new AppPage();
        navBar = new NavbarPage();
        producto = new ProductoPage();
    });

    it('Deberia ingresar cliente', () => {
        const NOMBRE_CLIENTE = 'Ramiro';
        const CEDULA_CLIENTE = '1090565932';
        const GENERO_CLIENTE = 'H';
        const FECHA_NACIMIENTO_CLIENTE = '02/05/2000';

        page.navigateTo();
        navBar.clickBotonProductos();
        producto.clickBotonComponenteCrearClientes();        
        producto.ingresarNombre(NOMBRE_CLIENTE);
        producto.ingresarCedula(CEDULA_CLIENTE);
        producto.ingresarGenero(GENERO_CLIENTE);
        producto.ingresarFechaNacimiento(FECHA_NACIMIENTO_CLIENTE);

        producto.clickBotonCrearClientes().then(
            () => {                
                expect(producto.obtenerMensaje()).toEqual('Exitoso');
            }
        );
    });

    it('Deberia eliminar cliente', () => {
        const ID_CLIENTE = '1';

        page.navigateTo();
        navBar.clickBotonProductos();
        producto.clickBotonComponenteEliminarClientes();
        producto.ingresarId(ID_CLIENTE);

        producto.clickBotonEliminarClientes().then(
            () => {
                expect(producto.obtenerMensaje()).toEqual('Exitoso');                
            }
        );
    });

    it('Deberia no ingresar cliente menor de edad', () => {
        const NOMBRE_CLIENTE = 'Ramiro';
        const CEDULA_CLIENTE = '1090056312';
        const GENERO_CLIENTE = 'H';
        const FECHA_NACIMIENTO_CLIENTE = '02/05/2010';

        page.navigateTo();
        navBar.clickBotonProductos();
        producto.clickBotonComponenteCrearClientes();        
        producto.ingresarNombre(NOMBRE_CLIENTE);
        producto.ingresarCedula(CEDULA_CLIENTE);
        producto.ingresarGenero(GENERO_CLIENTE);
        producto.ingresarFechaNacimiento(FECHA_NACIMIENTO_CLIENTE);

        producto.clickBotonCrearClientes().then(
            () => {                
                expect(producto.obtenerMensaje()).toEqual('El cliente es menor de edad');
            }
        );
    });

    it('Deberia no eliminar cliente existente', () => {
        const ID_CLIENTE = '8';

        page.navigateTo();
        navBar.clickBotonProductos();
        producto.clickBotonComponenteEliminarClientes();
        producto.ingresarId(ID_CLIENTE);

        producto.clickBotonEliminarClientes().then(
            () => {
                expect(producto.obtenerMensaje()).toEqual('El cliente no existe en el sistema');                
            }
        );
    });

    it('Deberia no ingresar cliente existente', () => {
        const NOMBRE_CLIENTE = 'Ramiro';
        const CEDULA_CLIENTE = '1090565932';
        const GENERO_CLIENTE = 'H';
        const FECHA_NACIMIENTO_CLIENTE = '02/05/2000';

        page.navigateTo();
        navBar.clickBotonProductos();
        producto.clickBotonComponenteCrearClientes();        
        producto.ingresarNombre(NOMBRE_CLIENTE);
        producto.ingresarCedula(CEDULA_CLIENTE);
        producto.ingresarGenero(GENERO_CLIENTE);
        producto.ingresarFechaNacimiento(FECHA_NACIMIENTO_CLIENTE);

        producto.clickBotonCrearClientes().then(
            () => {                
                expect(producto.obtenerMensaje()).toEqual('El cliente ya existe en el sistema');
            }
        );
    });


    it('Deberia listar clientes', () => {
        page.navigateTo();
        navBar.clickBotonProductos();
        producto.clickBotonComponenteListarClientes();

        expect(0).toBe(producto.contarProductos());
    });
});
