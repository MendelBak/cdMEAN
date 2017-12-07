import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
 title: String = 'Dojo Mail App';
 emails: Array<Object> = [
   {'email': 'bill.BAber@gnail.com', importance: true, subject: 'Pirate Supplies', content: 'I need to restock on grog.'},
   {'email': 'adar.SHALOm@gnail.com', importance: false, subject: 'Hello Mom', content: 'Hi. Dojo is fire.'},
   {'email': 'grant.overby@gnail.com', importance: true, subject: 'Im Back!', content: 'Im staying in the Dojo!'},
   {'email': 'MENDEL.bak@gnail.com,', importance: false, subject: 'Gut YomTov', content: 'Have a Good Yud Tes Kislev!'}
 ];
}
