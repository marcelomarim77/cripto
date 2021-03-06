import { Component, Input, ViewChild, ElementRef } from '@angular/core';
import { CryptService } from './crypt.service';

import { Cripto } from './cripto';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    @Input() cripto: Cripto;
    @Input() descripto: Cripto;

    constructor(private cryptService: CryptService) {}

    getCripto(msg: string): void {
        this.cryptService.getCrypt(msg)
            .subscribe(data => {
                console.log(data);
                this.cripto = data;
         });
    }

    getDescripto(msg: string): void {
        this.cryptService.getDecrypt(msg)
            .subscribe(data => {
                console.log(data);
                this.descripto = data;
         });
    }
}
