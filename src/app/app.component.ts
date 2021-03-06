import { Component, Input } from '@angular/core';
import { CryptService } from './crypt.service';

import { Cripto } from './cripto';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    @Input() cripto: Cripto;

    constructor(private cryptService: CryptService) {}

    getCripto(msg: string): void {
        if (msg.length == 0) {
            window.alert('Informe o texto que será criptografado ou descriptografado');
            return;
        }
        this.cryptService.getCrypt(msg)
            .subscribe(data => {
                console.log(data);
                this.cripto = data;
         });
    }
}
