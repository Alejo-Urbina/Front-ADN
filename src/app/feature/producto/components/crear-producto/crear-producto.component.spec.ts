import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

import { CrearProductoComponent } from './crear-producto.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { ProductoService } from '../../shared/service/producto.service';
import { HttpService } from 'src/app/core/services/http.service';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { ProductoModule } from '@producto/producto.module';
import { CoreModule } from '@core/core.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CookieService } from 'ngx-cookie-service';

describe('CrearProductoComponent', () => {
    let component: CrearProductoComponent;
    let fixture: ComponentFixture<CrearProductoComponent>;
    let productoService: ProductoService;

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            declarations: [CrearProductoComponent],
            imports: [
                CommonModule,
                HttpClientTestingModule,
                HttpClientModule,
                RouterTestingModule,
                ReactiveFormsModule,
                FormsModule,
                BrowserModule,
                AppRoutingModule,
                ProductoModule,
                CoreModule,
                BrowserAnimationsModule, // required animations module
                ToastrModule.forRoot() // ToastrModule added
            ],
            providers: [ProductoService, HttpService, ToastrService, CookieService],
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(CrearProductoComponent);
        component = fixture.componentInstance;
        productoService = TestBed.inject(ProductoService);
        spyOn(productoService, 'guardarCliente').and.returnValue(
            of(true)
        );
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('formulario es invalido cuando esta vacio', () => {
        expect(component.productoForm.valid).toBeFalsy();
    });

    it('Registrando producto', () => {
        expect(component.productoForm.valid).toBeFalsy();
        component.productoForm.controls.nombre.setValue('Alejandro');
        component.productoForm.controls.cedula.setValue('1090515822');
        component.productoForm.controls.genero.setValue('H');
        component.productoForm.controls.fechaNacimiento.setValue('1998-01-02');
        expect(component.productoForm.valid).toBeTruthy();

        component.cerar();

        // Aca validamos el resultado esperado al enviar la petición
        // TODO adicionar expect
    });
});
