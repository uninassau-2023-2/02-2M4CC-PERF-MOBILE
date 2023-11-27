import { Injectable } from '@angular/core'

@Injectable({
    providedIn: 'root'
})

export class GetSetValueService {
    constructor() { }

    private valor: number = 0;

    setValor(novoValor: number) {
        this.valor = novoValor;
    }

    getValor() {
        return this.valor;
    }
}