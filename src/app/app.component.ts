import { Component } from '@angular/core';
import { CryptService } from './crypt.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'cripto';

    constructor(private cryptService: CryptService) {}

    getCripto(msg: string): void {
        /*const msg = 'ABCDE';*/
        const cripto = this.cryptService.getCrypt(msg).subscribe();
        console.log(cripto);
    }

    getDescripto(msg: string): void {
        /*const msg = 'Gbqb'*/;
        this.cryptService.getDecrypt(msg);
    }

}
