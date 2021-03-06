import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Cripto } from './cripto';
@Injectable({
  providedIn: 'root'
})
export class CryptService {

    private cryptoUrl = 'http://localhost:3000';
  
    constructor(private http: HttpClient) { }

    getCrypt(msg: string): Observable<Cripto> {
        const url = `${this.cryptoUrl}/crypt/${msg}`;
        return this.http.get<Cripto>(url);
    }

    getDecrypt(msg: string): Observable<Cripto> {
        const url = `${this.cryptoUrl}/decrypt/${msg}`;
        return this.http.get<Cripto>(url);
    }

}
