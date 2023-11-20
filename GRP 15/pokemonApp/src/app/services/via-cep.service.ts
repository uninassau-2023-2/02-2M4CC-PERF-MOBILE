import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root',
})
export class ViaCEPService {
	constructor(private http: HttpClient) {}
	consultarCEP(cep: string = '52011210'): Observable<any> {
		const url = `https://viacep.com.br/ws/${cep}/json/`;
		return this.http.get(url);
	}
}
