import { Injectable } from "@angular/core";
import { ToastrService } from 'ngx-toastr';

@Injectable({
    providedIn: 'root'
})
export class AlertasServices{
    constructor(private toast: ToastrService){}

    showSucces(texto,titulo){
        this.toast.success(texto,titulo);
    }

    showError(texto,titulo){
        this.toast.error(texto,titulo);
    }

}