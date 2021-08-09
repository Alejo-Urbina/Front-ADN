
import { NavbarPage } from '../page/navbar/navbar.po';
import { AppPage } from '../app.po';
import { ProductoPage } from '../page/producto/producto.po';

describe('workspace-project Producto', () => {
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
        const CEDULA_CLIENTE = '1090565324';
        const GENERO_CLIENTE = 'H';
        const FECHA_NACIMIENTO_CLIENTE = '1990-05-02';

        page.navigateTo();
        navBar.clickBotonProductos();
        producto.clickBotonCrearClientes();
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

    it('Deberia no ingresar cliente menor de edad', () => {
        const NOMBRE_CLIENTE = 'Ramiro';
        const CEDULA_CLIENTE = '1090565324';
        const GENERO_CLIENTE = 'H';
        const FECHA_NACIMIENTO_CLIENTE = '2009-05-02';

        page.navigateTo();
        navBar.clickBotonProductos();
        producto.clickBotonCrearClientes();
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

    it('Deberia eliminar cliente', () => {
        const ID_CLIENTE = '1';

        page.navigateTo();
        navBar.clickBotonProductos();
        producto.clickBotonEliminarClientes();
        producto.ingresarNombre(ID_CLIENTE);

        producto.clickBotonEliminarClientes().then(
            () => {
                expect(producto.obtenerMensaje()).toEqual('Exitoso');
            }
        );
    });

    it('Deberia no eliminar cliente que no existe', () => {
        const ID_CLIENTE = '6';

        page.navigateTo();
        navBar.clickBotonProductos();
        producto.clickBotonEliminarClientes();
        producto.ingresarNombre(ID_CLIENTE);

        producto.clickBotonEliminarClientes().then(
            () => {
                expect(producto.obtenerMensaje()).toEqual('El cliente no existe en el sistema');
            }
        );
    });    

    it('Deberia listar clientes', () => {
        page.navigateTo();
        navBar.clickBotonProductos();
        producto.clickBotonListarClientes();


        expect(0).toBe(producto.contarProductos());
    });
});
