import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import {
  RouterTestingModule
} from '@angular/router/testing';
import { BorrarProductoComponent } from './borrar-producto.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ProductoService } from '@producto/shared/service/producto.service';
import { HttpService } from '@core/services/http.service';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { CookieService } from 'ngx-cookie-service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { ProductoModule } from '@producto/producto.module';
import { CoreModule } from '@core/core.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('BorrarProductoComponent', () => {
  let component: BorrarProductoComponent;
  let fixture: ComponentFixture<BorrarProductoComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ BorrarProductoComponent ],
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
    fixture = TestBed.createComponent(BorrarProductoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
